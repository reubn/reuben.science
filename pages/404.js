import PostList from '@/components/PostList'
import PhotoList from '@/components/PhotoList'

import {main, heading, posts as postsStyle, postLink} from './styles'
import {errorCode, errorMessage} from './404.module.css'

import sortPosts from '@/src/sortPosts'
import photos from '@/src/photos'

import * as postsFns from './posts/[slug].js'

export default function Home({posts, photos, photoSize}) {
  return (
    <>
      <main className={main}>
        <h1>
          <span className={errorCode}>4</span>
          <span className={errorCode}>0</span>
          <span className={errorCode}>4</span>
        </h1>
        <h2 className={errorMessage}>ngl idk where this page is</h2>

        <PostList posts={sortPosts(posts)} heading="Trash Reads" />
        <PhotoList photos={photos} heading="Pretty Pictures" />
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: await Promise.all((await postsFns.getStaticPaths()).paths.map(postsFns.getStaticProps).slice(0, 4)),
    photos: (await photos()).slice(0, 8),
    photoSize: process.env.UNSPLASH_SIZE
  }
})
