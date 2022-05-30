const fs = require('fs')
const path = require('path')

const {EXPORT_DETAIL, BUILD_ID_FILE, CLIENT_STATIC_FILES_PATH} = require('next/constants')
const {outDirectory} = require(path.join(process.cwd(), '.next', EXPORT_DETAIL))
const buildID = fs.readFileSync(path.join(process.cwd(), '.next', BUILD_ID_FILE), 'utf8')

const cleanBuildManifest = hiddenPages => {
  const buildManifestPath = path.join(outDirectory, '_next', CLIENT_STATIC_FILES_PATH, buildID, '_buildManifest.js')
  const buildManifestContent = fs.readFileSync(buildManifestPath, 'utf8')

  const buildManifest = (()=>{
    let self = {}
    eval(buildManifestContent)

    return self.__BUILD_MANIFEST
  })()


  const {__rewrites, sortedPages, ...pages} = buildManifest

  const cleanedBuildManifest = {
    __rewrites,
    sortedPages: sortedPages.filter(page => !hiddenPages.includes(page)),
    ...Object.fromEntries(Object.entries(pages).filter(([page]) => !hiddenPages.includes(page)))
  }

  const cleanedBuildManifestContent = buildManifestContent
    .replace(/(self\.__BUILD_MANIFEST=).+?([,;]self)/, `$1${JSON.stringify(cleanedBuildManifest)}$2`)

  fs.writeFileSync(buildManifestPath, cleanedBuildManifestContent)
}

const cleanSSGManifest = hiddenPages => {
  const ssgManifestPath = path.join(outDirectory, '_next', CLIENT_STATIC_FILES_PATH, buildID, '_ssgManifest.js')
  const ssgManifestContent = fs.readFileSync(ssgManifestPath, 'utf8')

  const ssgManifest = (()=>{
    let self = {}
    eval(ssgManifestContent)

    return self.__SSG_MANIFEST
  })()

  const cleanedSSGManifest = [...ssgManifest.values()].filter(string => !hiddenPages.includes(string))

  const cleanedSSGManifestContent = ssgManifestContent
    .replace(/(self\.__SSG_MANIFEST=new Set\().+?(\)[,;]self)/, `$1${JSON.stringify(cleanedSSGManifest)}$2`)

  fs.writeFileSync(ssgManifestPath, cleanedSSGManifestContent)
}

const concealPages = allPages => {
  const hiddenPages = allPages.filter(({pageProps: {hidden}}) => hidden).map(({page}) => page)

  cleanBuildManifest(hiddenPages)
  cleanSSGManifest(hiddenPages)

  return allPages.filter(({pageProps: {hidden}}) => !hidden)
}

module.exports = concealPages
