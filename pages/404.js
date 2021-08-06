import PostList from '@/components/PostList'
import PhotoList from '@/components/PhotoList'

import {main, heading, posts as postsStyle, postLink} from './styles'
import {errorCode, errorMessage} from './_error.module.css'

import listPosts from '@/src/posts/list'
import getPhotos from '@/src/getPhotos'

import dehydratePost from '@/src/posts/dehydrate'
import hydratePost from '@/src/posts/hydrate'

export default function F0F({posts, photos}) {
  return (
    <>
      <main className={main}>
        <h1>
          <span className={errorCode}>4</span>
          <span className={errorCode}>0</span>
          <span className={errorCode}>4</span>
        </h1>
        <h2 className={errorMessage}>ngl idk where this page is</h2>

        <PostList posts={posts.map(hydratePost)} heading="Trash Reads" />
        <PhotoList photos={photos} heading="Pretty Pictures" />
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await listPosts(0, 4)).map(dehydratePost),
    photos: await getPhotos(0, 8)
  }
})
