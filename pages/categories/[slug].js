import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import CategoryLink from '../../components/CategoryLink'
import PostLink from '../../components/PostLink'

import categories from '../../content/categories'

import sortPosts from '../../src/sortPosts'

import * as posts from '../posts/[slug].js'

import {main, posts as postsStyle, postLink} from '../styles'
import {category} from './styles'

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
        <section className={postsStyle}>
          {sortPosts(posts).map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async ctx => {
  const slug = ctx.params?.slug

  return {
    props: {
      slug,
      posts: (await posts.getStaticPaths()).paths.map(posts.getStaticProps).filter(({props: {metadata: {category}}}) => category.includes(slug))
    }
  }
}

export async function getStaticPaths() {

  return {
    paths: Object.keys(categories).map(slug => ({params: {slug}})),
    fallback: false // In a static-only build, we don't need fallback rendering.
  }
}
