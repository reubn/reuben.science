import ActiveLink from '../ActiveLink'

import {post} from './styles'

export default ({slug, metadata: {title}}) => {
  const post = active => (
    <a className={post}>{title}</a>
  )

  return (
    <ActiveLink key={slug} href={`/posts/${slug}`} passHref>{post}</ActiveLink>
  )
}
