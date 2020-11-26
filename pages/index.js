import Head from 'next/head'

import ActiveLink from '../components/ActiveLink'
import Memoji from '../components/Memoji'
import PostLink from '../components/PostLink'

import {me, memoji, postLink, name, postsHeading, foreword} from './styles'

import * as posts from './posts/[slug].js'

const frameCount = Math.floor(315 / 3);
const getFrameURL = frame => `/me-360t/frame-${frame * 3}.webp`


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
        <title>Reuben</title>
      </Head>

      <main className={me}>
        <h1 className={name}>Reuben Eggar</h1>
        <Memoji className={memoji} frameCount={frameCount} getFrameURL={getFrameURL} width={Math.floor(459 * 1.5)} height={Math.floor(350 * 1.5)}/>

        <span className={foreword}>No idea what's gonna end up on here but enjoy what is a placeholder piece of text!</span>
        <p className={postsHeading}>Posts</p>
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
