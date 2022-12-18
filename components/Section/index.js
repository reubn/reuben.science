import {ChevronRight} from 'lucide-react'

import ActiveLink from '../ActiveLink'

import {section, heading as headingStyle, more} from './styles'

const Section = ({heading, moreHref, moreAria, children, ...props}) => (
  <section className={section} {...props}>
    {heading
      ? (
        <ActiveLink href={moreHref}>
          <a className={headingStyle}>
            {heading} <ChevronRight className={more} role="link" aria-label={moreAria} />
          </a>
        </ActiveLink>
      )
      : null}
    {children}
  </section>
)


export default Section
