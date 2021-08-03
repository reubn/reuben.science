import postList from './list'

export const postsPerPage = 10

export const sliceFromPageNumber = pageNumber => [(+pageNumber - 1) * postsPerPage, +pageNumber * postsPerPage]

export default async () => Array(Math.ceil((await postList()).length / postsPerPage))
  .fill()
  .map((_, index) => ({
    params: {
      pageNumber: `${index + 1}`,
      generate: !!index,
      path: index ? `/posts/_/${index + 1}` : '/posts'
    }
  }))
