import dynamic from "next/dynamic"

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

export const processPost = ({slug, metadata, content}) => {
  const refractor = require('refractor')
  const toHTML = require('hast-util-to-html')

  require('@/src/syntaxHighlight/languages')(refractor)

  return {
    ...metadata,
    date: new Date(metadata.date).toISOString(),
    linesOfCode: Math.max(0, (content.match(/<pre[^]*?<\/pre>/gm) || []).join('').split('\n').length - 1) || null,
    preview: {
      language: metadata.preview.language,
      html: toHTML(refractor.highlight(metadata.preview.content, metadata.preview.language))
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
  const metadata = processPost({metadata: post.metadata, content: renderToString(post)})

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