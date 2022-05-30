const fs = require('fs')
const path = require('path')

const {PRERENDER_MANIFEST, EXPORT_DETAIL} = require('next/constants')
const {outDirectory} = require(path.join(process.cwd(), '.next', EXPORT_DETAIL))
const preRenderManifest = require(path.join(process.cwd(), '.next', PRERENDER_MANIFEST))

const {routes: prmRoutes} = preRenderManifest

const getPageProps = dataRoute => require(path.join(outDirectory, dataRoute)).pageProps || {}
const extractPages = () => Object.entries(prmRoutes).map(([page, {dataRoute}]) => ({page, pageProps: getPageProps(dataRoute)}))

module.exports = extractPages
