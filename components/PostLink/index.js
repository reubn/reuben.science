import ActiveLink from '../ActiveLink'

import {post as postStyle, title as titleStyle, subtitle as subtitleStyle, emoji as emojiStyle} from './styles'

export default ({slug, metadata: {title, subtitle, emoji}}) => {
  const post = active => (
    <a>
      <div className={postStyle}>
        <p className={titleStyle}><span className={emojiStyle}>{emoji}</span>{title}</p>
        <p className={subtitleStyle}>{subtitle || ''}</p>
      </div>
    </a>
  )

  return (
    <ActiveLink key={slug} href={`/posts/${slug}`} passHref>{post}</ActiveLink>
  )
}
