import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import PostLink from '../../components/PostLink'

import sortPosts from '../../src/sortPosts'

import {main, posts as postsStyle} from '../styles'
import {postLink, empty} from './styles'

import * as posts from './[slug].js'

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
        {
          posts.length
            ? (
              <section className={postsStyle}>
                {sortPosts(posts).map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
              </section>
            )
            : <h2 className={empty}>no posts here mate</h2>
        }
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: await Promise.all((await posts.getStaticPaths()).paths.map(posts.getStaticProps)),
  }
})
