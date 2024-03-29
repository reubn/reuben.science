import {Suspense} from 'react'
import dynamic from "next/dynamic"

import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import PostList from '@/components/PostList'
import SnippetList from '@/components/SnippetList'
import PhotoList from '@/components/PhotoList'

import listPosts from '@/src/posts/list'
import getPhotos from '@/src/getPhotos'

import dehydratePost from '@/src/posts/dehydrate'
import hydratePost from '@/src/posts/hydrate'

import listSnippets from '@/src/snippets/list'

import dehydrateSnippet from '@/src/snippets/dehydrate'
import hydrateSnippet from '@/src/snippets/hydrate'

import {main, me, profile, name, description, emoji, memoji} from './styles'

const Memoji = dynamic(() => import('@/components/Memoji'), {
  suspense: true
})

const frameCount = Math.floor(315 / 3);
const getFrameURL = frame => `/me-360t/frame-${frame * 3}.webp`

export default function Home({posts, snippets, photos}) {
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
          <Suspense fallback={""}>
            <Memoji className={memoji} frameCount={frameCount} getFrameURL={getFrameURL} width={Math.floor(459 * 1.5)} height={Math.floor(350 * 1.5)} />
          </Suspense>
          <div className={profile}>
            <h1 className={name}>Reuben</h1>
            <p className={description}>
              <span className={emoji} role="img">{['🏥', '🌵', '🛠', '⛰', '📸'].map(em => <span key={em}>{em}</span>)}</span>
              <p>Nothing more than a collection of random things I find interesting. No idea what's coming next.</p>
            </p>
          </div>
        </section>

        <PostList posts={posts.map(hydratePost)} displayImage={true} />
        <SnippetList posts={snippets.map(hydrateSnippet)} displayPreview={true} />
        <PhotoList photos={photos} />
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await listPosts(0, 4)).map(dehydratePost),
    snippets: (await listSnippets(0, 2)).map(dehydrateSnippet),
    photos: await getPhotos(0, 8)
  }
})
