import Memoji from '../components/Memoji'
import PostLink from '../components/PostLink'

import photos from '../src/photos'
import sortPosts from '../src/sortPosts'


import {main, me, memoji, heading, posts as postsStyle, photos as photosStyle, photo, postLink} from './styles'

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
      <main className={main}>
        <section className={me}>
          <Memoji className={memoji} frameCount={frameCount} getFrameURL={getFrameURL} width={Math.floor(459 * 1.5)} height={Math.floor(350 * 1.5)}/>
          <div>
            <h1>Reuben</h1>
            <p>No idea what's gonna end up on here, inevitably just some random shit</p>
          </div>
        </section>
        <p className={heading}>Recent Posts</p>
        <section className={postsStyle}>
          {sortPosts(posts).map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
        </section>

        <p className={heading}>Recent Photos</p>
        <section className={photosStyle}>
          {images.map(({src, id}) => (
            <a href={`https://unsplash.com/photos/${id}`} className={photo} aria-label={`Unsplash Photo ${id}`}>
              <img src={src} key={id} alt={`Unsplash Photo ${id}`}/>
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
