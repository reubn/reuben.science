import {ChevronRight} from 'react-feather'

import ActiveLink from '../ActiveLink'

import {section, heading, more} from './styles'

const Section = ({headingText, moreHref, moreAria, children, ...props}) => (
  <span className={section} {...props}>
    {headingText
      ? (
        <ActiveLink href={moreHref}>
          <a className={heading}>
            {headingText} <ChevronRight className={more} aria-label={moreAria} />
          </a>
        </ActiveLink>
      )
      : null}
    {children}
  </span>
)


export default Section
