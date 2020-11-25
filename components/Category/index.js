import Head from 'next/head'

import ActiveLink from '../ActiveLink'

import categories from '../../content/categories'

import {category as categoryStyles} from './styles'

export default ({category}) => (
  <ActiveLink href={`/categories/${category}`} passHref>{active => <a className={categoryStyles} style={{'--category-background': categories[category]}}>{category}</a>}</ActiveLink>
)
