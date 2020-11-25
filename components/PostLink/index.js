import ActiveLink from '../ActiveLink'

import {post as postStyle, title as titleStyle, description as descriptionStyle, emoji as emojiStyle} from './styles'

export default ({slug, metadata: {title, description, emoji}}) => {
  const post = active => (
    <a>
      <div className={postStyle}>
        <p className={titleStyle}><span className={emojiStyle}>{emoji}</span>{title}</p>
        <p className={descriptionStyle}>{description || ''}</p>
      </div>
    </a>
  )

  return (
    <ActiveLink key={slug} href={`/posts/${slug}`} passHref>{post}</ActiveLink>
  )
}
