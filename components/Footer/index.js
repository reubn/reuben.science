import {Camera, Twitter, Instagram, Github, Mail, Code} from 'lucide-react'

import {useRouter} from 'next/router'

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

const srcLookup = {
  '/posts/[slug]': ({slug}) => `content/posts/${slug}`,
  '/snippets/[slug]': ({slug}) => `content/snippets/${slug}`,
  '/categories/[slug]': () => `pages/categories/[slug].js`,
  '/404': () => `pages/404.js`
}

const Footer = () => {
  const {pathname, asPath, query} = useRouter() || {}

  const githubPath = (pathname !== asPath)
    ? srcLookup[pathname]?.(query)
    : `pages/${pathname.startsWith('/') ? pathname.slice(1) : pathname}${pathname.endsWith('/') ? '' : '/'}index.js`

  const githubURL = githubPath
    ? `https://github.com/reubn/reuben.science/tree/main/${githubPath}`
    : `https://github.com/reubn/reuben.science`

  return (
    <footer className={footer}>
      <p className={icons}>
        <a href="//unsplash.com/@re" className={unsplash} title="Unsplash">
          <Camera className={icon} />
        </a>
        <a href="//github.com/reubn" className={github} title="GitHub">
          <Github className={icon} />
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

      <a href={githubURL} className={code} title="Source Code">
        <Code className={icon} />
      </a>
    </footer>
  )
}

export default Footer
