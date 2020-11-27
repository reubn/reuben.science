import Logo from '../Logo'
import ActiveLink from '../ActiveLink'

import {header, logo, nav, link, active as activeStyle} from './styles'

const Header = () => (
  <header className={header}>
    <Logo className={logo} easterEggPass="012345" easterEggCallback={() => alert('hello!')}/>
    <section className={nav}>
      <ActiveLink href="/" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': 'linear-gradient(135deg, #FF5252 0%, #FC2727 100%)'}}>Home</a>}</ActiveLink>
      <ActiveLink href="/posts" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': 'linear-gradient(135deg, #0CE9E8 0%, #04A5FB 100%)'}}>Posts</a>}</ActiveLink>
      <ActiveLink href="/me" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': 'linear-gradient(135deg, #5E52FF 0%, #9F27FC 100%)'}}>Me</a>}</ActiveLink>
    </section>
  </header>
)

export default Header
