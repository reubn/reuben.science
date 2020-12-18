import {NextSeo, BreadcrumbJsonLd, ArticleJsonLd} from 'next-seo'

import CategoryLink from '../CategoryLink'

import {title, description, categories, date as dateStyle, post, body} from './styles'

export default function Post({slug, metadata, children, __HACK_ID}){
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
          },
          images: metadata.image ? [{
              url: `https://${process.env.NEXT_PUBLIC_DOMAIN}${metadata.image.src}`,
              width: metadata.image.size.width,
              height: metadata.image.size.height,
              alt: metadata.title,
            }] : undefined
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
          },
          {
            position: 3,
            name: metadata.title,
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/posts/${slug}`,
          }
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
        <section className={categories}>{metadata.category.map(category => <CategoryLink category={category} key={category} />)}</section>
        <h1 className={title}>{metadata.title}</h1>
        {metadata.description && <h2 className={description}>{metadata.description}</h2>}
        <span className={dateStyle}>{date.toLocaleDateString()}</span>
        <span className={body} id={__HACK_ID}>
          {children}
        </span>
      </article>
    </>
  )
}
