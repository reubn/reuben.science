import {useState, useEffect} from 'react'

import _router from 'next/router'

import {NextSeo, BreadcrumbJsonLd} from 'next-seo'
import InfiniteScroll from 'react-infinite-scroll-component'

import ActiveLink from '@/components/ActiveLink'
import PostList from '@/components/PostList'

import listPosts from '@/src/posts/list'
import pagination, {sliceFromPageNumber} from '@/src/posts/pagination'

import dehydratePost from '@/src/posts/dehydrate'
import hydratePost from '@/src/posts/hydrate'

import {main} from '../styles'
import {page, empty} from './styles'

export default function PostsWrapper({posts: initialPosts, pageNumber: initialPageNumber, pages}) {
  const [posts, setPosts] = useState(initialPosts)
  const [currentPage, setCurrentPage] = useState(pages.find(({params: {pageNumber: cPageNumber}}) => initialPageNumber === cPageNumber))
  const [hasMore, setHasMore] = useState(pages.length > 1)

  const getMorePosts = async () => {
    const currentPageIndex = pages.indexOf(currentPage)

    if(currentPageIndex + 1 === pages.length || currentPageIndex < 0) return

    const newPageIndex = currentPageIndex + 1
    const newPage = pages[newPageIndex]
    const newPath = newPage.params.path

    const {router} = _router
    const {pageProps: {posts: newPosts}} = await router._getData(() => router._getStaticData(router.pageLoader.getDataHref(newPath, newPath, true, router.locale)))

    setPosts([...posts, ...newPosts])
    setCurrentPage(newPage)
    setHasMore(newPageIndex < pages.length - 1)
  }

  return (
    <>
      <NextSeo
        title="Posts"
        openGraph={{
          title: 'Posts',
          site_name: process.env.NEXT_PUBLIC_DOMAIN,
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/`,
          },
          {
            position: 2,
            name: 'Posts',
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/posts`,
          }
        ]}
      />

      <main className={`${main} ${page}`}>
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePosts}
          hasMore={hasMore}
          scrollableTarget={"app"}
        >
          <PostList posts={posts.map(hydratePost)} heading={false} fallback={<h2 className={empty}>no posts here mate</h2>} displayImage={true} />
        </InfiniteScroll>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const pageNumber = '1'

  return {
    props: {
      posts: (await listPosts(...sliceFromPageNumber(pageNumber))).map(dehydratePost),
      pages: await pagination(),
      pageNumber
    }
  }
}
