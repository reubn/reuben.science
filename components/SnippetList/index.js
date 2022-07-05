import Section from '@/components/Section'
import SnippetLink from '@/components/SnippetLink'

import {posts as postsStyle} from '../SnippetList/styles'

const SnippetList = ({posts, fallback=null, displayPreview, ...props}) => (
  posts.length
    ? (
      <Section heading="Recent Snippets" moreHref="/snippets" moreAria="More Snippets" {...props}>
        <div className={postsStyle} role="feed">
          {posts.map(props => <SnippetLink key={props.slug} displayPreview={displayPreview} {...props} />)}
        </div>
      </Section>
    )
    : fallback
)

export default SnippetList
