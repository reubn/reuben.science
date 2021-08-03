import {useState} from 'react'

import colour from '@/src/colour.js'

import Logo from '../Logo'
import ActiveLink from '../ActiveLink'

import {header, logo, flipped, nav, link, active as activeStyle} from './styles'

const Header = () => {
  const [flip, setFlip] = useState(false)
  return (
    <header className={header}>
      <ActiveLink href="/">
        <Logo className={`${logo} ${flip ? flipped : ''}`} type="autoFlat" easterEgg={{pass: '024135', callback: () => setFlip(!flip)}} role="banner" />
      </ActiveLink>
      <nav className={nav}>
        <ActiveLink href="/" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': colour('pink-red').gradient}}>Home</a>}</ActiveLink>
        <ActiveLink href="/posts" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': colour('blue').gradient}}>Posts</a>}</ActiveLink>
        <ActiveLink href="/snippets" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': colour('indigo').gradient}}>Snippets</a>}</ActiveLink>
      </nav>
    </header>
  )
}

export default Header
