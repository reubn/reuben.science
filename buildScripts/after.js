const env = require('@next/env')

env.loadEnvConfig(process.cwd(), process.env.NODE_ENV === 'development')

const extractPages = require('./extractPages')
const generateSitemap = require('./generateSitemap')
const generateRSS = require('./generateRSS')
const concealPages = require('./concealPages')

const pages = extractPages()

const safePages = concealPages(pages)

generateSitemap(safePages)
generateRSS(safePages)
