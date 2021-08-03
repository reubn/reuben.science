import {getStaticPaths, getStaticProps} from '@/pages/posts/[slug].js'

import hydratePost from './hydrate'

import sortPosts from './sort'

export default async (...slice) => {
  const promises = (await getStaticPaths()).paths
    .map(getStaticProps)

  const c = (await Promise.all(promises))
    .map(({props}) => hydratePost(props))
    .sort(sortPosts)

    return [...c, ...c, ...c, ...c, ...c, ...c, ...c, ...c, ...c, ...c, ...c, ...c, ...c, ...c].slice(...slice)
}
