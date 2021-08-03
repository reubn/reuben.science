import ActiveLink from '../ActiveLink'

import categories from '@/content/categories'

import {category as categoryStyles} from './styles'

const CategoryLink = ({category, className='', ...props}) => (
  <ActiveLink key={category} href={`/categories/${category}`} passHref>
    {active => (
      <a className={[className, categoryStyles].join(' ')} style={{'--category-background': categories[category]}}>
        {category}
      </a>
    )}
  </ActiveLink>
)

export default CategoryLink
