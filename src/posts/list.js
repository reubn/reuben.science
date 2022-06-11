import {getStaticPaths, getStaticProps} from '@/pages/posts/[slug].js'

import hydratePost from './hydrate'

import sortPosts from './sort'

export default async (...slice) => {
  const promises = (await getStaticPaths()).paths
    .map(getStaticProps)

  return (await Promise.all(promises))
    .map(({props}) => hydratePost(props))
    .filter(({hidden}) => !hidden)
    .sort(sortPosts)
    .slice(...slice)
}
