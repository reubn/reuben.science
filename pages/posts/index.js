import {NextSeo} from 'next-seo'

import PostLink from '../../components/PostLink'

import {main, postLink} from './styles'

import * as posts from '../posts/[slug].js'

export default function Home({posts}) {
  const sortedPosts = posts
    .map(({props}) => {
      props.metadata.date = new Date(props.metadata.date)
      return props
    })
    .sort(({metadata: {date: a}}, {metadata: {date: b}}) => a - b)

  return (
    <>
      <NextSeo
        title="Posts"
        openGraph={{
          title: 'Posts',
          site_name: process.env.NEXT_PUBLIC_DOMAIN,
        }}
      />

      <main className={main}>
        {sortedPosts.map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await posts.getStaticPaths()).paths.map(posts.getStaticProps)
  }
})
