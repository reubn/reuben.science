import {NextSeo, BreadcrumbJsonLd} from 'next-seo'

import CategoryLink from '../../components/CategoryLink'

import * as categories from './[slug].js'

import {main} from '../styles'
import {category, categories as categoriesStyle} from './styles'

export default function Categories({categories}) {
  return (
    <>
      <NextSeo
        title={'Categories'}
        openGraph={{
          title: 'Categories',
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
            name: 'Categories',
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/categories`,
          }
        ]}
      />

      <main className={main}>
        <section className={categoriesStyle}>
          {categories.map(slug => <CategoryLink category={slug} className={category} key={slug} />)}
        </section>
      </main>
    </>
  )
}

export const getStaticProps = ctx => {
  const slug = ctx.params?.slug

  return {
    props: {
      categories: categories.getStaticPaths().paths.map(({params: {slug}}) => slug)
    }
  }
}
