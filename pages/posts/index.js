import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import PostList from '@/components/PostList'

import listPosts from '@/src/posts/list'

import dehydratePost from '@/src/posts/dehydrate'
import hydratePost from '@/src/posts/hydrate'

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
        <PostList posts={posts.map(hydratePost)} heading={false} fallback={<h2 className={empty}>no posts here mate</h2>} displayImage={true} />
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await listPosts()).map(dehydratePost)
  }
})
