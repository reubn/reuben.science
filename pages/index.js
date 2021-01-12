import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import Memoji from '@/components/Memoji'
import PostList from '@/components/PostList'
import PhotoList from '@/components/PhotoList'

import getPosts from '@/src/getPosts'
import getPhotos from '@/src/getPhotos'

import dehydratePost from '@/src/dehydratePost'
import hydratePost from '@/src/hydratePost'

import {main, me, profile, name, description, emoji, memoji} from './styles'

const frameCount = Math.floor(315 / 3);
const getFrameURL = frame => `/me-360t/frame-${frame * 3}.webp`

export default function Home({posts, photos}) {
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
              <span className={emoji}>{['🏥', '🌵', '🛠', '⛰', '📸'].map(em => <span key={em}>{em}</span>)}</span>
              No idea what's gonna end up on here, inevitably just some random shit I find interesting.
            </p>
          </div>
        </section>

        <PostList posts={posts.map(hydratePost)} />
        <PhotoList photos={photos} />
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await getPosts(0, 4)).map(dehydratePost),
    photos: await getPhotos(0, 8)
  }
})
