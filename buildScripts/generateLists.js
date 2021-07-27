const fs = require('fs')
const path = require('path')

const getPostSlugs = require(path.join(process.cwd(), 'src/posts/slugs'))

module.exports = async () => {
    const slugs = await getPostSlugs()

    await fs.promises.writeFile(path.join(process.cwd(), 'content/posts/.list.json'), JSON.stringify(slugs));

    console.log('Generated Lists')
}
