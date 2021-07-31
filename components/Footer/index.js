import {Camera, Twitter, Instagram, GitHub, Mail, Code} from 'react-feather'

import ActiveLink from '../ActiveLink'

import {footer, icons, icon, unsplash, github, mail, twitter, instagram, code} from './styles'

const localPart = 'me'

const Gradient = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 132" width="0" height="0">
    <defs>
      <linearGradient id="instagram" gradientTransform="rotate(45)">
        <stop offset="0" stopColor="#fd5" />
        <stop offset=".1" stopColor="#fd5" />
        <stop offset=".5" stopColor="#ff543e" />
        <stop offset="1" stopColor="#c837ab" />
      </linearGradient>
    </defs>
  </svg>
)

const Footer = () => (
  <footer className={footer}>
    <p className={icons}>
      <a href="//unsplash.com/@re" className={unsplash} title="Unsplash">
        <Camera className={icon} />
      </a>
      <a href="//github.com/reubn" className={github} title="GitHub">
        <GitHub className={icon} />
      </a>
      <a href="mailto:click.to.reveal@email.com" onClick={e => (window.location.href = `mailto:${localPart}@${process.env.NEXT_PUBLIC_DOMAIN}`, e.preventDefault())} className={mail} title="Email">
        <Mail className={icon} />
      </a>
      <a href="//twitter.com/reubn_" className={twitter} title="Twitter">
        <Twitter className={icon} />
      </a>
      <a href="//instagram.com/reubn" className={instagram} title="Instagram">
        <Gradient />
        <Instagram className={icon} />
      </a>
    </p>

    <a href="//github.com/reubn/reuben.science" className={code} title="Source Code">
      <Code className={icon} />
    </a>
  </footer>
)

export default Footer
