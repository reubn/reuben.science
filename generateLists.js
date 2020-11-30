const fs = require('fs')
const path = require('path')

const env = require('@next/env')

env.loadEnvConfig(process.cwd(), process.env.NODE_ENV === 'development')

const generateLists = async () => {
  const posts = await fs.promises.readdir(path.join(process.cwd(), 'content/posts'))

  const slugs = posts
    .filter(path => !path.startsWith('.'))
    .filter(path => process.env.SHOW_WIP === 'SHOW_WIP' || !path.includes('.wip.'))
    .map(path => path.replace(/\.[^\.]+$/, ''))

    await fs.promises.writeFile(path.join(process.cwd(), 'content/posts/.list.json'), JSON.stringify(slugs));

    console.log('Generated Lists')
}

generateLists()
