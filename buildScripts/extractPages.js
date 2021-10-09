const fs = require('fs')
const path = require('path')

const {PRERENDER_MANIFEST} = require('next/constants')
const manifest = require(path.join(process.cwd(), '.next', PRERENDER_MANIFEST))

const extractPages = () => {
  const {routes} = manifest

  return Object.entries(routes).flatMap(([page, route]) => {
    const {pageProps} = require(path.join(process.cwd(), 'out', route.dataRoute))

    if(pageProps.hidden) return []

    return {
      page,
      pageProps
    }
  })
}

module.exports = extractPages
