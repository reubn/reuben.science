const fs = require('fs')
const path = require('path')

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

  await fs.promises.writeFile(path.join(process.cwd(), 'out', SITEMAP_FILE), sitemap);
  await fs.promises.writeFile(path.join(process.cwd(), 'out', ROBOTS_FILE), robots);
}
