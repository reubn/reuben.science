import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import PostList from '@/components/PostList'
import CategoryLink from '@/components/CategoryLink'

import categories from '@/content/categories'

import getPosts from '@/src/getPosts'

import dehydratePost from '@/src/dehydratePost'
import hydratePost from '@/src/hydratePost'

import {main} from '../styles'
import {category, empty} from './styles'

export default function Category({slug, posts}) {
  return (
    <>
      <NextSeo
        title={`${slug} | Categories`}
        openGraph={{
          title: slug,
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
            name: 'Categories',
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/categories`,
          },
          {
            position: 3,
            name: slug,
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/categories/${slug}`,
          }
        ]}
      />

      <main className={main}>
        <CategoryLink category={slug} className={category} />
        <PostList posts={posts.map(hydratePost)} heading={false} fallback={<h2 className={empty}>no posts here mate</h2>}/>
      </main>
    </>
  )
}

export const getStaticProps = async ctx => {
  const slug = ctx.params?.slug

  return {
    props: {
      slug,
      posts: (await getPosts())
        .filter(({metadata: {category}}) => category.includes(slug))
        .map(dehydratePost)
    }
  }
}

export function getStaticPaths() {
  return {
    paths: Object.keys(categories).map(slug => ({params: {slug}})),
    fallback: false // In a static-only build, we don't need fallback rendering.
  }
}
