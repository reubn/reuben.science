import {Camera, Twitter, Instagram, GitHub, Mail} from 'react-feather'

import ActiveLink from '../ActiveLink'

import {footer, icons, icon, unsplash, github, mail, twitter, instagram} from './styles'

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
      <a href="//unsplash.com/@re" className={unsplash} aria-label="unsplash">
        <Camera className={icon} />
      </a>
      <a href="//github.com/reubn" className={github} aria-label="github">
        <GitHub className={icon} />
      </a>
      <a href="mailto:click.to.reveal@email.com" onClick={(() => window.location.href = `mailto:${localPart}@${process.env.DOMAIN}`)} className={mail} aria-label="email">
        <Mail className={icon} />
      </a>
      <a href="//twitter.com/_reubn" className={twitter} aria-label="twitter">
        <Twitter className={icon} />
      </a>
      <a href="//instagram.com/reubn" className={instagram} aria-label="instagram">
        <Gradient />
        <Instagram className={icon} />
      </a>
    </p>
  </footer>
)

export default Footer
