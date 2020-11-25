import Head from 'next/head'

import ActiveLink from '../components/ActiveLink'

import '../styles/globals.css'
import '../styles/prism-theme.css'

import Logo from '../components/Logo'

import {app, header, content, logo, nav, link, active as activeStyle} from './_app.module.css'

function App({Component, pageProps}) {
  // console.log(pageProps)
  return (
    <>
      <Head>
        <title>Reuben</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/*<meta name="msapplication-TileColor" content="#ffffff" />*/}
        <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />


      </Head>
      <section className={app}>
        <header className={header}>
          <Logo className={logo} easterEggPass="012345" easterEggCallback={() => alert('hello!')}/>
          <section className={nav}>
            <ActiveLink href="/" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': 'linear-gradient(135deg, #FF5252 0%, #FC2727 100%)'}}>Home</a>}</ActiveLink>
            <ActiveLink href="/posts" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': 'linear-gradient(135deg, #0CE9E8 0%, #04A5FB 100%)'}}>Posts</a>}</ActiveLink>
            <ActiveLink href="/me" passHref>{active => <a className={`${link} ${active ? activeStyle : ''}`} style={{'--link-underline': 'linear-gradient(135deg, #5E52FF 0%, #9F27FC 100%)'}}>Me</a>}</ActiveLink>
          </section>
        </header>
        <main className={content}>
          <Component {...pageProps} />
        </main>
      </section>
    </>
  )
}

export default App
