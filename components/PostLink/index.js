import ActiveLink from '../ActiveLink'

import {post as postStyle, title as titleStyle, subtitle as subtitleStyle, emoji as emojiStyle, readingTime as readingTimeStyle} from './styles'

const PostLink = ({slug, metadata: {title, subtitle, emoji, readingTime}, ...props}) => {
  const post = active => (
    <a {...props}>
      <div className={postStyle}>
          <p className={titleStyle}><span className={emojiStyle}>{emoji}</span>{title}</p>
        <p className={subtitleStyle}>{subtitle || ''} <span className={readingTimeStyle}> • {readingTime}</span></p>
      </div>
    </a>
  )

  return (
    <ActiveLink key={slug} href={`/posts/${slug}`} passHref>{post}</ActiveLink>
  )
}


export default PostLink
