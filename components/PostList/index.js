import Section from '@/components/Section'
import PostLink from '@/components/PostLink'

import {posts as postsStyle} from './styles'

const PostList = ({posts, fallback=null, displayImage, ...props}) => (
  posts.length
    ? (
      <Section heading="Recent Posts" moreHref="/posts" moreAria="More Posts" {...props}>
        <div className={postsStyle} role="feed">
          {posts.map(props => <PostLink key={props.slug} displayImage={displayImage} {...props} />)}
        </div>
      </Section>
    )
    : fallback
)

export default PostList
