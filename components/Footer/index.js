import {Camera, Twitter, Instagram, GitHub} from 'react-feather'

import ActiveLink from '../ActiveLink'

import {footer, icons, icon} from './styles'

const Footer = () => (
  <footer className={footer}>
    <p className={icons}>
      <Camera className={icon} />
      <GitHub className={icon} />
      <Twitter className={icon} />
      <Instagram className={icon} />
    </p>
  </footer>
)

export default Footer
