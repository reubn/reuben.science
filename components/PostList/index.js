import Section from '@/components/Section'
import PostLink from '@/components/PostLink'

import {posts as postsStyle} from './styles'

const PostList = ({posts, fallback=null, ...props}) => (
  posts.length
    ? (
      <Section headingText="Recent Posts" moreHref="/posts" moreAria="More Posts" {...props}>
        <section className={postsStyle}>
          {posts.map(props => <PostLink key={props.slug} {...props} />)}
        </section>
      </Section>
    )
    : fallback
)

export default PostList
