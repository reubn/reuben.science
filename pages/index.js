import Head from 'next/head'

import Memoji from '../components/Memoji'
import PostLink from '../components/PostLink'

import photos from '../src/photos'

import {me, memoji, name, heading, posts as postsStyle, photos as photosStyle, photo, postLink, foreword} from './styles'

import * as posts from './posts/[slug].js'

const frameCount = Math.floor(315 / 3);
const getFrameURL = frame => `/me-360t/frame-${frame * 3}.webp`


export default function Home({posts, images}) {
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

        <p className={foreword}>No idea what's gonna end up on here but enjoy what is a placeholder piece of text!</p>
        <p className={heading}>Recent Posts</p>
        <section className={postsStyle}>
          {sortedPosts.map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
        </section>

        <p className={heading}>Recent Photos</p>
        <section className={photosStyle}>
          {images.map(({src, id}) => (
            <a href={`https://unsplash.com/photos/${id}`} className={photo}>
              <img src={src} key={id}/>
            </a>)
          )}
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await posts.getStaticPaths()).paths.map(posts.getStaticProps).slice(0, 4),
    images: (await photos()).slice(0, 8)
  }
})
