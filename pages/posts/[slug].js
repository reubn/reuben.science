import {Suspense} from 'react'
import dynamic from "next/dynamic"

import Post from "@/components/Post"

import postList from '@/content/posts/.list'
import {sort as categorySort} from '@/content/categories'

import getPostSlugs from '@/src/posts/slugs'

const dynamicImports = postList.reduce(
  (map, slug) => ({
    ...map,
    [slug]: dynamic(() => import(`@/content/posts/${slug}/index.mdx`), {
      suspense: true
    })
  }), {})

const processPost = ({metadata, content}) => {
  const readingTime = require('reading-time')
  const stripTags = require('striptags')

  const readingTimeResult = content ? readingTime(stripTags(content)) : {}

  return {
    ...metadata,
    category: metadata.category.sort(categorySort),
    date: new Date(metadata.date).toISOString(),
    readingTime: {
      mins: +readingTimeResult?.text?.replace('min read', '') ?? 0,
      words: +readingTimeResult?.words ?? 0
    }
  }
}

const renderToString = ({default: Component}) => {
  const ReactDOMServer = require("react-dom/server")

  return ReactDOMServer.renderToString(<Component />)
}

export default function PostWrapper({slug, metadata}) {
  const Mdx = dynamicImports[slug]

  return (
    <>
      <Post slug={slug} metadata={metadata}>
        <Suspense fallback={"Loading"}>
          <Mdx />
        </Suspense>
      </Post>
    </>
  )
}

export const getStaticProps = async ctx => {
  const slug = ctx.params?.slug
  const post = await import(`@/content/posts/${slug}/index.mdx`)
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
