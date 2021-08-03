import ActiveLink from '../ActiveLink'

import categories from '@/content/categories'

import {category as categoryStyles} from './styles'

export default ({category, className='', ...props}) => (
  <ActiveLink key={category} href={`/categories/${category}`} passHref>{active => <a className={[className, categoryStyles].join(' ')} style={{'--category-colour': categories[category].colour, '--category-gradient': categories[category].gradient}}>{category}</a>}</ActiveLink>
)
