import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import SnippetList from '@/components/SnippetList'

import listPosts from '@/src/snippets/list'

import dehydratePost from '@/src/snippets/dehydrate'
import hydratePost from '@/src/snippets/hydrate'

import {main} from '../styles'
import {empty} from '../posts/styles'

export default function Snippets({posts}) {
  return (
    <>
      <NextSeo
        title="Snippets"
        openGraph={{
          title: 'Snippets',
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
            name: 'Snippets',
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/snippets`,
          }
        ]}
      />

      <main className={main}>
        <SnippetList posts={posts.map(hydratePost)} heading={false} fallback={<h2 className={empty}>no posts here mate</h2>} />
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: (await listPosts()).map(dehydratePost)
  }
})
