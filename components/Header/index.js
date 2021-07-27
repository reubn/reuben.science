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
        <Logo className={`${logo} ${flip ? flipped : ''}`} type="lodFlat" easterEgg={{pass: '024135', callback: () => setFlip(!flip)}}/>
      </ActiveLink>
      <nav className={nav}>
        <ActiveLink href="/" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('pink-red')}}>Home</a>}</ActiveLink>
        <ActiveLink href="/posts" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('blue')}}>Posts</a>}</ActiveLink>
        <ActiveLink href="/snippets" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('indigo')}}>Snippets</a>}</ActiveLink>
      </nav>
    </header>
  )
}

export default Header
