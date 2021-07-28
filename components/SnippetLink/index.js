import ActiveLink from '../ActiveLink'

import {post as postStyle, title as titleStyle, description as descriptionStyle, emoji as emojiStyle, readingTime as readingTimeStyle} from '../PostLink/styles'
import {post as snippetPostStyle, pre} from './styles'

const SnippetLink = ({slug, metadata: {title, description, emoji, linesOfCode, preview: {language, html}}, ...props}) => {
  const post = active => (
    <a {...props}>
      <div className={`${postStyle} ${snippetPostStyle}`}>
        <pre className={`${pre} language-${language}`}>
          <div>
            <code dangerouslySetInnerHTML={{__html: html}}/>
          </div>
        </pre>
        <div>
          <p className={emojiStyle}>{emoji}</p>
          <p className={titleStyle}>{title}</p>
        </div>
        <p className={descriptionStyle}>{description || ''} <span className={readingTimeStyle}> • {linesOfCode || '???'} line{linesOfCode != 1 && 's'}</span></p>
      </div>
    </a>
  )

  return (
    <ActiveLink key={slug} href={`/snippets/${slug}`} passHref>{post}</ActiveLink>
  )
}


export default SnippetLink
