import Head from 'next/head'

import Memoji from '../components/Memoji'

import {me, memoji} from './styles'

import * as posts from './posts/[slug].js'

const frameCount = Math.floor(315 / 3);
const getFrameURL = frame => `/me-360t/frame-${frame * 3}.webp`


export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Reuben</title>
      </Head>

      <main className={me}>
        <Memoji className={memoji} frameCount={frameCount} getFrameURL={getFrameURL}/>
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await posts.getStaticPaths()).paths.map(posts.getStaticProps).map(({props}) => props)
  }
})
