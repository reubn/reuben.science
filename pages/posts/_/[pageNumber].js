import pagination, {sliceFromPageNumber} from '@/src/posts/pagination'
import postList from '@/src/posts/list'

import dehydratePost from '@/src/posts/dehydrate'

import postsPage from '../'

export default () => null

export const getStaticProps = async ctx => {
  const pageNumber = ctx.params?.pageNumber

  return {
    props: {
      posts: (await postList(...sliceFromPageNumber(pageNumber))).map(dehydratePost)
    }
  }
}

export async function getStaticPaths() {
  const paths = await pagination()
  return {
    paths: paths.filter(({params: {generate}}) => generate),
    fallback: false
  }
}
