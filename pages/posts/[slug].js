import dynamic from "next/dynamic"

import Post from "../../components/Post"

import postList from '../../content/posts/.list'

const dynamicImports = postList.reduce((map, slug) => ({...map, [slug]: dynamic(() => import(`../../content/posts/${slug}`))}), {})

export const processPost = ({metadata, content}) => {
  const readingTime = require('reading-time')

  return {
    ...metadata,
    readingTime: content ? readingTime(content).text.replace(' read', '') : undefined
  }
}

const getPostSlugs = async () => {
  const fs = require('fs')
  const path = require('path')

  const posts = await fs.promises.readdir(path.join(process.cwd(), "content/posts"))

  return posts
    .filter(path => !path.startsWith('.'))
    .filter(path => process.env.SHOW_WIP === 'SHOW_WIP' || !path.includes('.wip.'))
    .map(path => path.replace(/\.[^\.]+$/, ''))
}

const renderToString = slug => {
  const Component = require(`../../content/posts/${slug}`).default
  const ReactDOMServer = require("react-dom/server")

  return ReactDOMServer.renderToString(<Component />)
}

export default function PostWrapper({slug, metadata}) {
  const Mdx = dynamicImports[slug]

  return (
    <Post slug={slug} metadata={metadata}>
      <Mdx />
    </Post>
  )
}

export const getStaticProps = ctx => {
  const slug = ctx.params?.slug
  const metadata = processPost({metadata: require(`../../content/posts/${slug}`).metadata, content: renderToString(slug)})

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
