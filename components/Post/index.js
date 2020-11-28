import Head from 'next/head'

import Category from '../Category'

import {title, subtitle, categories, date, post} from './styles'

export default function Post({metadata, children}){
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <article className={post}>
        <section className={categories}>{metadata.category.map(category => <Category category={category}/>)}</section>
        <h1 className={title}>{metadata.title}</h1>
        {metadata.subtitle && <h2 className={subtitle}>{metadata.subtitle}</h2>}
        <span className={date}>{new Date(metadata.date).toLocaleDateString()}</span>
        {children}
      </article>
    </>
  )
}
