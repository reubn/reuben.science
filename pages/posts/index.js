import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import PostList from '@/components/PostList'

import getPosts from '@/src/getPosts'

import dehydratePost from '@/src/dehydratePost'
import hydratePost from '@/src/hydratePost'

import {main} from '../styles'
import {empty} from './styles'

export default function Posts({posts}) {
  return (
    <>
      <NextSeo
        title="Posts"
        openGraph={{
          title: 'Posts',
          site_name: process.env.NEXT_PUBLIC_DOMAIN,
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/`,
          },
          {
            position: 2,
            name: 'Posts',
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/posts`,
          }
        ]}
      />

      <main className={main}>
        <PostList posts={posts.map(hydratePost)} heading={false} fallback={<h2 className={empty}>no posts here mate</h2>}/>
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await getPosts(4)).map(dehydratePost)
  }
})
