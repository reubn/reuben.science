const fs = require('fs')
const path = require('path')

const getPostSlugs = require(path.join(process.cwd(), 'src/posts/slugs'))
const getSnippetSlugs = require(path.join(process.cwd(), 'src/snippets/slugs'))

module.exports = async () => {
    const postSlugs = await getPostSlugs()
    const snippetSlugs = await getSnippetSlugs()

    await fs.promises.writeFile(path.join(process.cwd(), 'content/posts/.list.json'), JSON.stringify(postSlugs));
    await fs.promises.writeFile(path.join(process.cwd(), 'content/snippets/.list.json'), JSON.stringify(snippetSlugs));

    console.log('Generated Lists')
}
