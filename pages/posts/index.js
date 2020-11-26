import Head from 'next/head'

import PostLink from '../../components/PostLink'

import {main, postLink} from './styles'

import * as posts from '../posts/[slug].js'

export default function Home({posts}) {
  const sortedPosts = posts
    .map(({props}) => {
      props.metadata.date = new Date(props.metadata.date)
      return props
    })
    .sort(({metadata: {date: a}}, {metadata: {date: b}}) => a - b)

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={main}>
        {sortedPosts.map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await posts.getStaticPaths()).paths.map(posts.getStaticProps)
  }
})
