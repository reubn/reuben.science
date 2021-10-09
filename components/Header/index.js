import {useState} from 'react'

import gradient from '@/src/gradient.js'

import Logo from '../Logo'
import ActiveLink from '../ActiveLink'

import {header, logo, flipped, nav, link, active as activeStyle, secret, visible} from './styles'

const Header = () => {
  const [easterEgg, setEasterEgg] = useState(false)
  return (
    <header className={header}>
      <ActiveLink href="/">
        <Logo className={`${logo} ${easterEgg ? flipped : ''}`} type="lodFlat" easterEgg={{pass: '024135', callback: () => setEasterEgg(!easterEgg)}} role="banner" />
      </ActiveLink>
      <nav className={nav}>
        <ActiveLink href={easterEgg ? '/secret' : '/nowhere'} passHref>{active => <a aria-hidden={easterEgg ? undefined : true} tabIndex={easterEgg ? undefined : -1} className={`${link} ${active ? activeStyle : ''} ${secret} ${easterEgg && visible}`} style={{'--link-underline': gradient('green')}}>{easterEgg ? 'Pssst' : ''}</a>}</ActiveLink>
        <ActiveLink href="/" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('pink-red')}}>Home</a>}</ActiveLink>
        <ActiveLink href="/posts" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('blue')}}>Posts</a>}</ActiveLink>
        <ActiveLink href="/snippets" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': gradient('indigo')}}>Snippets</a>}</ActiveLink>
      </nav>
    </header>
  )
}

export default Header
