import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import Memoji from '@/components/Memoji'
import PostList from '@/components/PostList'
import PhotoList from '@/components/PhotoList'

import photos from '@/src/photos'
import sortPosts from '@/src/sortPosts'

import {main, me, profile, name, description, emoji, memoji} from './styles'

import * as postsFns from './posts/[slug].js'

const frameCount = Math.floor(315 / 3);
const getFrameURL = frame => `/me-360t/frame-${frame * 3}.webp`

export default function Home({posts, photos, photoSize}) {
  return (
    <>
    <NextSeo
      title="Home"
      openGraph={{
        title: 'Home',
        site_name: process.env.NEXT_PUBLIC_DOMAIN,
      }}
    />

    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/`,
        }
      ]}
    />
      <main className={main}>
        <section className={me}>
          <Memoji className={memoji} frameCount={frameCount} getFrameURL={getFrameURL} width={Math.floor(459 * 1.5)} height={Math.floor(350 * 1.5)} />
          <div className={profile}>
            <h1 className={name}>Reuben</h1>
            <p className={description}>
              <span className={emoji}>{['🏥', '🌵', '🛠', '⛰', '📸'].map(em => <span>{em}</span>)}</span>
              No idea what's gonna end up on here, inevitably just some random shit I find interesting.
            </p>
          </div>
        </section>

        <PostList posts={sortPosts(posts)} />
        <PhotoList photos={photos} photoSize={photoSize} />
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
