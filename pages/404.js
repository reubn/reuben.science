import PostLink from '../components/PostLink'

import {main, heading, posts as postsStyle, postLink} from './styles'
import {errorCode} from './404.module.css'

import sortPosts from '../src/sortPosts'

import * as posts from './posts/[slug].js'

export default function Home({posts}) {
  return (
    <>
      <main className={main}>
        <h1>
          <span className={errorCode}>4</span>
          <span className={errorCode}>0</span>
          <span className={errorCode}>4</span>
        </h1>

        <p className={heading}>Recent Posts</p>
        <section className={postsStyle}>
          {sortPosts(posts).map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await posts.getStaticPaths()).paths.map(posts.getStaticProps).slice(0, 4)
  }
})
