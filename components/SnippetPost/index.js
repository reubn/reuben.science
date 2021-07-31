import {NextSeo, BreadcrumbJsonLd, ArticleJsonLd} from 'next-seo'

import {title, description, categories, info as infoStyle, date as dateStyle, post, body} from '../Post/styles'

export default function SnippetPost({slug, metadata, children, __HACK_ID}){
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
          }
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
          },
          {
            position: 3,
            name: metadata.title,
            item: `https://${process.env.NEXT_PUBLIC_DOMAIN}/snippets/${slug}`,
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
        <h1 className={title}>{metadata.title}</h1>
        <span className={infoStyle}>
          <time datetime={date.toLocaleDateString()}>{date.toLocaleDateString()}</time>
          <span>{metadata.linesOfCode || '???'} line{metadata.linesOfCode != 1 && 's'}</span>
        </span>
        <span className={body} id={__HACK_ID}>
          {children}
        </span>
      </article>
    </>
  )
}
