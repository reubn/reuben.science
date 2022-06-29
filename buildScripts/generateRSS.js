const fs = require('fs')
const path = require('path')

const {EXPORT_DETAIL} = require('next/constants')
const {outDirectory} = require(path.join(process.cwd(), '.next', EXPORT_DETAIL))

module.exports = async pages => {
  const entries = pages
  .filter(({pageProps}) => pageProps.metadata)
  .map(({page, pageProps}) => (
`<item>
  <title>${pageProps.metadata.title}</title>
  <description>${pageProps.metadata.description}</description>
  <link>https://${process.env.NEXT_PUBLIC_DOMAIN}${page}</link>
  <pubDate>${new Date(pageProps.metadata.date).toUTCString()}</pubDate>
</item>`
))

  const rss = (
`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
   <title>Reuben</title>
   <description>RSS</description>
   <language>en</language>
   <link>https://${process.env.NEXT_PUBLIC_DOMAIN}</link>
   <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
   <atom:link href="https://${process.env.NEXT_PUBLIC_DOMAIN}/${process.env.NEXT_PUBLIC_RSS_FILE}" rel="self" type="application/rss+xml" />
   ${entries.join('\n')}
  </channel>
</rss>`)

  await fs.promises.writeFile(path.join(outDirectory, process.env.NEXT_PUBLIC_RSS_FILE), rss);
}
