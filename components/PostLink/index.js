import ActiveLink from '../ActiveLink'

import Image from '@/components/Image'

import {post as postStyle, title as titleStyle, description as descriptionStyle, emoji as emojiStyle, readingTime as readingTimeStyle} from './styles'

const PostLink = ({slug, displayImage, metadata: {title, description, emoji, readingTime, image}, ...props}) => {
  const post = active => (
    <a {...props}>
      <div className={postStyle}>
        {displayImage && image ? <Image image={image} /> : null}
        <div>
          <p className={emojiStyle}>{emoji}</p>
          <p className={titleStyle}>{title}</p>
        </div>
        <p className={descriptionStyle}>{description || ''} <span className={readingTimeStyle}> • {readingTime.text || '?? mins'}</span></p>
      </div>
    </a>
  )

  return (
    <ActiveLink key={slug} href={`/posts/${slug}`} passHref>{post}</ActiveLink>
  )
}


export default PostLink
