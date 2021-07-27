import Section from '@/components/Section'
import SnippetLink from '@/components/SnippetLink'

import {posts as postsStyle} from '../SnippetList/styles'

const SnippetList = ({posts, fallback=null, ...props}) => (
  posts.length
    ? (
      <Section heading="Recent Snippets" moreHref="/posts" moreAria="More Snippets" {...props}>
        <section className={postsStyle}>
          {posts.map(props => <SnippetLink key={props.slug} {...props} />)}
        </section>
      </Section>
    )
    : fallback
)

export default SnippetList
