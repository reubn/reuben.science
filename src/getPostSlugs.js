module.exports = async () => {
  const fs = require('fs')
  const path = require('path')

  const posts = await fs.promises.readdir(path.join(process.cwd(), "content/posts"))

  return posts
    .filter(path => !path.startsWith('.'))
    .filter(path => process.env.SHOW_WIP === 'SHOW_WIP' || !path.includes('.wip'))
    .map(path => path.endsWith('.wip') ? path : path.replace(/\.[^\.]+$/, ''))
}


// a.wip.mdx => a.wip
// b.mdx => b
// c.wip => c.wip
// d => d
// e.mdx.wip=>e.mdx.wip
