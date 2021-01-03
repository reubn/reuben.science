import {useState} from 'react'

import gradient from '@/src/gradient.js'

import Logo from '../Logo'
import ActiveLink from '../ActiveLink'

import {header, logo, flipped, nav, link, active as activeStyle} from './styles'

const Header = () => {
  const [flip, setFlip] = useState(false)
  return (
    <header className={header}>
      <ActiveLink href="/">
        <Logo className={`${logo} ${flip ? flipped : ''}`} easterEggPass="024135" easterEggCallback={() => setFlip(!flip)}/>
      </ActiveLink>
      <nav className={nav}>
        <ActiveLink href="/" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('pink-red')}}>Home</a>}</ActiveLink>
        <ActiveLink href="/posts" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('blue')}}>Posts</a>}</ActiveLink>
        {/*<ActiveLink href="/me" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('indigo', 'purple-hint')}}>Me</a>}</ActiveLink>*/}
      </nav>
    </header>
  )
}

export default Header
