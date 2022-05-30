const fs = require('fs')
const path = require('path')

const {EXPORT_DETAIL} = require('next/constants')
const {outDirectory} = require(path.join(process.cwd(), '.next', EXPORT_DETAIL))

const SITEMAP_FILE = 'sitemap.xml'
const ROBOTS_FILE = 'robots.txt'


module.exports = async pages => {
  const entries = pages.map(({page, pageProps}) => (
`<url>
  <loc>https://${process.env.NEXT_PUBLIC_DOMAIN}${page}</loc>
</url>`
))
  const sitemap = (
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join('\n')}</urlset>`
)

  const robots = (
`User-agent: *
Allow: /
Host: https://${process.env.NEXT_PUBLIC_DOMAIN}
Sitemap: https://${process.env.NEXT_PUBLIC_DOMAIN}/${SITEMAP_FILE}`)

  await fs.promises.writeFile(path.join(outDirectory, SITEMAP_FILE), sitemap);
  await fs.promises.writeFile(path.join(outDirectory, ROBOTS_FILE), robots);
}
