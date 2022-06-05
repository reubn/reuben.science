import dynamic from "next/dynamic"

import {refractor} from 'refractor'
import {toHtml} from 'hast-util-to-html'

import SnippetPost from "@/components/SnippetPost"

import postList from '@/content/snippets/.list'

import getPostSlugs from '@/src/snippets/slugs'

const dynamicImports = postList.reduce(
  (map, slug) => ({
    ...map,
    [slug]: dynamic(() => import(`@/content/snippets/${slug}/index.mdx`), {
      loading: () => process.browser && window.__HACK_GLOBAL
        ? <span dangerouslySetInnerHTML={{__html: window.__HACK_GLOBAL[slug] || ''}} />
        : null
    })
  }), {})

const previewLineCount = 5

const wrapCode = (language, {children}) => ({
  type: 'element',
  tagName: 'span',
  properties: {
    className: `language-${language}`
  },
  children
})

const filterLines = (commentLookup, blacklistedLines) => language => line => {
  const trimmed = line.trim()

  if(!trimmed) return false
  if(blacklistedLines.includes(trimmed)) return false

  const comments = commentLookup[language]
  const startsWithComment = comments?.some(comment => trimmed.startsWith(comment))

  if(startsWithComment) return false

  return true
}

import languages from '@/src/syntaxHighlight/languages/index.mjs'
languages(refractor)

import commentLookup from '@/src/syntaxHighlight/commentLookup'
import blacklistedLines from '@/src/syntaxHighlight/blacklistedLines'

const getPreview = (config, codeBlocks) => {
  const filterLinesWithOpts = filterLines(commentLookup, blacklistedLines)

  if(config.code) return wrapCode(config.language, refractor.highlight(config.code, config.language))

  const taggedLines = codeBlocks.flatMap(({language, lines}) => lines.filter(filterLinesWithOpts(language)).map(line => ({language, line}))).slice(config.lines.from, config.lines.to || config.lines.from + previewLineCount)

  const maxCommonIndent = Math.min(...taggedLines.map(({line}) => (line.match(/^\s*/)?.[0].length) || 0))
  const regex = new RegExp(`^\\s{${maxCommonIndent}}`)
  const deintented = maxCommonIndent ? taggedLines.map(({language, line}) => ({language, line: line.replace(regex, '')})) : taggedLines

  const chunked = deintented.reduce((chunks, taggedLine) => {
    const previous = chunks[chunks.length - 1]

    if(previous?.language === taggedLine.language) previous?.lines.push(taggedLine.line)
    else chunks.push({language: taggedLine.language, lines: [taggedLine.line]})

    return chunks
  }, [])

  return chunked.flatMap(({language, lines}, index, {length}) => {
    const wrapped = wrapCode(language, refractor.highlight(lines.join('\n'), language))

    if(index < length - 1) return [wrapped, {type: 'text', value: '\n'}]
    return [wrapped]
  })
}

export const processPost = ({slug, metadata, codeBlocks, content}) => {
  const config = {
    lines: {
      from: 0,
      to: previewLineCount
    },
    ...metadata.preview
  }

  const highlighted = getPreview(config, codeBlocks)

  return {
    ...metadata,
    date: new Date(metadata.date).toISOString(),
    linesOfCode: Math.max(0, (content.match(/<pre[^]*?<\/pre>/gm) || []).join('').split('\n').length - 1) || null,
    preview: {
      html: toHtml(highlighted)
    }
  }
}

const renderToString = ({default: Component}) => {
  const ReactDOMServer = require("react-dom/server")

  return ReactDOMServer.renderToString(<Component />)
}

export default function SnippetWrapper({slug, metadata}) {
  const Mdx = dynamicImports[slug]
  const __HACK_ID = `HACK-SNIPPET-${slug}`

  return (
    <>
      <SnippetPost slug={slug} metadata={metadata} __HACK_ID={__HACK_ID}>
        <Mdx />
      </SnippetPost>
      {
        process.browser
          ? null
          : <script
              dangerouslySetInnerHTML={{
                __html: `window.__HACK_GLOBAL = {...(window.__HACK_GLOBAL || {}), [${JSON.stringify(slug)}]: document.getElementById('${__HACK_ID}').innerHTML}`
              }}
            />
        }
    </>
  )
}

export const getStaticProps = async ctx => {
  const slug = ctx.params?.slug
  const post = await import(`@/content/snippets/${slug}/index.mdx`)
  console.log({...post})
  const metadata = processPost({metadata: post.metadata, codeBlocks: post.codeBlocks, content: renderToString(post)})

  return {
    props: {
      slug,
      metadata
    }
  }
}

export async function getStaticPaths() {
  const slugs = await getPostSlugs()

  return {
    paths: slugs?.map(slug => ({params: {slug}})),
    fallback: false
  }
}
