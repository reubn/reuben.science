import ActiveLink from '../ActiveLink'

import {post as postStyle, title as titleStyle, description as descriptionStyle, emoji as emojiStyle, readingTime as readingTimeStyle} from '../PostLink/styles'
import {post as snippetPostStyle, pre} from './styles'

const SnippetLink = ({slug, metadata: {title, description, emoji, linesOfCode, preview: {html}}, displayPreview, ...props}) => {
  const preview = displayPreview && (
    <pre className={pre} role="img" aria-label="Snippet Preview">
      <div>
        <code dangerouslySetInnerHTML={{__html: html}}/>
      </div>
    </pre>
  )

  const post = active => (
    <a title={title} {...props}>
      <article className={`${postStyle} ${snippetPostStyle}`}>
        {preview}
        <h1>
          <p className={emojiStyle}>{emoji}</p>
          <p className={titleStyle}>{title}</p>
        </h1>
        <p className={descriptionStyle}>{description || ''} <span className={readingTimeStyle}> • {linesOfCode || '???'} line{linesOfCode != 1 && 's'}</span></p>
      </article>
    </a>
  )

  return (
    <ActiveLink key={slug} href={`/snippets/${slug}`} passHref>{post}</ActiveLink>
  )
}


export default SnippetLink
