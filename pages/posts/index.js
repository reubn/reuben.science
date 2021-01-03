import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import PostList from '@/components/PostList'

import sortPosts from '@/src/sortPosts'

import {main} from '../styles'
import {empty} from './styles'

import * as postsFns from './[slug].js'

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
        <PostList posts={sortPosts(posts)} heading={false} fallback={<h2 className={empty}>no posts here mate</h2>}/>
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: await Promise.all((await postsFns.getStaticPaths()).paths.map(postsFns.getStaticProps)),
  }
})
