import {NextSeo, BreadcrumbJsonLd, ArticleJsonLd} from 'next-seo'

import Category from '../Category'

import {title, description, categories, date as dateStyle, post} from './styles'

export default function Post({slug, metadata, children}){
  const date = new Date(metadata.date)

  return (
    <>
      <NextSeo
        title={metadata.title}
        description={metadata.description}
        openGraph={{
          title: metadata.title,
          description: metadata.description,
          site_name: process.env.NEXT_PUBLIC_DOMAIN,
          type: 'article',
          article: {
            publishedTime: date.toISOString(),
            authors: ['Reuben'],
            tags: metadata.category,
          }
        }}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Reuben',
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/`,
          },
          {
            position: 2,
            name: metadata.title,
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/posts/${slug}`,
          },
        ]}
      />

      <ArticleJsonLd
        title={metadata.title}
        datePublished={date.toISOString()}
        authorName={['Reuben']}
        publisherName="Reuben"
        description={metadata.description}
      />

      <article className={post}>
        <section className={categories}>{metadata.category.map(category => <Category category={category}/>)}</section>
        <h1 className={title}>{metadata.title}</h1>
        {metadata.description && <h2 className={description}>{metadata.description}</h2>}
        <span className={dateStyle}>{date.toLocaleDateString()}</span>
        {children}
      </article>
    </>
  )
}
