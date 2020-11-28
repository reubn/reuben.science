import {NextSeo} from 'next-seo'

import Category from '../Category'

import {title, subtitle, categories, date as dateStyle, post} from './styles'

export default function Post({metadata, children}){
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

      <article className={post}>
        <section className={categories}>{metadata.category.map(category => <Category category={category}/>)}</section>
        <h1 className={title}>{metadata.title}</h1>
        {metadata.subtitle && <h2 className={subtitle}>{metadata.subtitle}</h2>}
        <span className={dateStyle}>{date.toLocaleDateString()}</span>
        {children}
      </article>
    </>
  )
}
