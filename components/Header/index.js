import gradient from '../../src/gradient.js'

import Logo from '../Logo'
import ActiveLink from '../ActiveLink'

import {header, logo, nav, link, active as activeStyle} from './styles'

const Header = () => (
  <header className={header}>
    <Logo className={logo} easterEggPass="012345" easterEggCallback={() => alert('hello!')}/>
    <nav className={nav}>
      <ActiveLink href="/" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('pink-red')}}>Home</a>}</ActiveLink>
      <ActiveLink href="/posts" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('blue')}}>Posts</a>}</ActiveLink>
      <ActiveLink href="/me" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('indigo', 'purple-hint')}}>Me</a>}</ActiveLink>
    </nav>
  </header>
)

export default Header
