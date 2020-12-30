import {useEffect} from 'react'

import Head from 'next/head'
import {useRouter} from 'next/router'

import {DefaultSeo} from 'next-seo'

import '@/styles/globals.css'
import '@/styles/prism-theme.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {app, content} from './_app.module.css'

import ping from '@/src/.analytics'

function App({Component, pageProps}){
  const router = useRouter();

  useEffect(() => {
    const routeChange = ping

    router.events.on('routeChangeComplete', routeChange)
    routeChange(window.location.pathname) // capture initial load

    return () => {
      router.events.off('routeChangeComplete', routeChange)
    }
  }, [])

  return (
    <>
      <Head>
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
        <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <meta name="theme-color" content="#0E151B" />

        <link rel="alternate" type="application/rss+xml" href={`https://${process.env.NEXT_PUBLIC_DOMAIN}/${process.env.NEXT_PUBLIC_RSS_FILE}`} />
      </Head>
      <DefaultSeo
        titleTemplate="%s | Reuben"
        description="Just some random stuff"
        openGraph={{
          type: 'website',
          site_name: process.env.NEXT_PUBLIC_DOMAIN,
          locale: 'en_GB',
          images: [
            {
              url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/og.png`,
              width: 1200,
              height: 630,
              alt: process.env.NEXT_PUBLIC_DOMAIN,
            }
          ]
        }}
        twitter={{
          handle: '@_reubn',
          site: '@_reubn',
          cardType: 'summary_large_image',
        }}
      />
      <section className={app}>
        <Header />
        <main className={content}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </section>
    </>
  )
}

export default App
