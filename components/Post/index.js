import {NextSeo, BreadcrumbJsonLd, ArticleJsonLd} from 'next-seo'

import CategoryLink from '../CategoryLink'
import Image from '../Image'

import LengthDisplay from './LengthDisplay'

import {title, description, categories, headerImage, info as infoStyle, readingTime as readingTimeStyle, words as wordsStyle, date as dateStyle, post, body} from './styles'

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
          },
          images: metadata.image ? [{
              url: `https://${process.env.NEXT_PUBLIC_DOMAIN}${metadata.image.resolutions[1].src}`,
              width: metadata.image.resolutions[1].width,
              height: metadata.image.resolutions[1].height,
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
        <Image image={metadata.image} className={headerImage} alt={metadata.emoji} />
        <span className={infoStyle}>
          <time dateTime={date.toLocaleDateString()}>{date.toLocaleDateString()}</time>
          <LengthDisplay className={readingTimeStyle} readingTime={metadata.readingTime} />
        </span>
        <div className={body}>
          {children}
        </div>
      </article>
    </>
  )
}
