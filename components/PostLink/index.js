import ActiveLink from '../ActiveLink'

import {post as postStyle, title as titleStyle, subtitle as subtitleStyle, emoji as emojiStyle} from './styles'

export default ({slug, metadata: {title, subtitle, emoji, readingTime}, ...props}) => {
  const post = active => (
    <a {...props}>
      <div className={postStyle}>
          <p className={titleStyle}><span className={emojiStyle}>{emoji}</span>{title}</p>
        <p className={subtitleStyle}>{subtitle || ''} — {readingTime}</p>
      </div>
    </a>
  )

  return (
    <ActiveLink key={slug} href={`/posts/${slug}`} passHref>{post}</ActiveLink>
  )
}
