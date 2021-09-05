import ActiveLink from '../ActiveLink'

import Image from '@/components/Image'

import {post as postStyle, title as titleStyle, description as descriptionStyle, emoji as emojiStyle, readingTime as readingTimeStyle} from './styles'

const PostLink = ({slug, displayImage, metadata: {title, description, emoji, readingTime, image}, imageSizes, ...props}) => {
  const post = active => (
    <a title={title} {...props}>
      <article className={postStyle}>
        {displayImage && image ? <Image image={image} alt={emoji} sizes={imageSizes}/> : null}
        <h1>
          <p className={emojiStyle}>{emoji}</p>
          <p className={titleStyle}>{title}</p>
        </h1>
        <p className={descriptionStyle}>{description || ''} <time time={readingTime.mins && `PD0T0H${readingTime.mins}M`} className={readingTimeStyle} aria-label="Reading Time"> • {readingTime.mins || '???'} min{readingTime.mins != 1 && 's'}</time></p>
      </article>
    </a>
  )

  return (
    <ActiveLink key={slug} href={`/posts/${slug}`} passHref>{post}</ActiveLink>
  )
}


export default PostLink
