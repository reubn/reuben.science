import {ChevronRight} from 'react-feather'

import ActiveLink from '../ActiveLink'

import {section, heading as headingStyle, more} from './styles'

const Section = ({heading, moreHref, moreAria, children, ...props}) => (
  <span className={section} {...props}>
    {heading
      ? (
        <ActiveLink href={moreHref}>
          <a className={headingStyle}>
            {heading} <ChevronRight className={more} aria-label={moreAria} />
          </a>
        </ActiveLink>
      )
      : null}
    {children}
  </span>
)


export default Section
