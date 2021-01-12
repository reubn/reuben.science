import {getStaticPaths, getStaticProps} from '@/pages/posts/[slug].js'

import hydratePost from './hydratePost'

import sortPosts from './sortPosts'

export default async (...slice) => {
  const promises = (await getStaticPaths()).paths
    .map(getStaticProps)

  return (await Promise.all(promises))
    .map(({props}) => hydratePost(props))
    .sort(sortPosts)
    .slice(...slice)
}
