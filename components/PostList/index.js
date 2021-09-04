import Section from '@/components/Section'
import PostLink from '@/components/PostLink'

import {posts as postsStyle} from './styles'

const PostList = ({posts, fallback=null, displayImage, ...props}) => (
  posts.length
    ? (
      <Section heading="Recent Posts" moreHref="/posts" moreAria="More Posts" {...props}>
        <div className={postsStyle} role="feed">
          {posts.map(props => (
            <PostLink
             key={props.slug}
             displayImage={displayImage}
             imageSizes="(max-width: 760px) calc(min(1000px, 100vw - 3.5rem) - 2.3rem), calc((min(1000px, 100vw - 3.5rem) / 2) - 2.3rem)"
             {...props}
            />
          ))}
        </div>
      </Section>
    )
    : fallback
)

export default PostList
