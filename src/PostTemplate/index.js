import Head from 'next/head'

import Category from '../../components/Category'

import {title, subtitle, categories, date, article} from './styles'

export default function PostTemplate({metadata, children}){
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <article className={article}>
        <section className={categories}>{metadata.category.map(category => <Category category={category}/>)}</section>
        <h1 className={title}>{metadata.title}</h1>
        {metadata.subtitle && <h3 className={subtitle}>{metadata.subtitle}</h3>}
        <span className={date}>{new Date(metadata.date).toLocaleDateString()}</span>
        {children}
      </article>
    </>
  )
}
