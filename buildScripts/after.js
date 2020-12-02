const env = require('@next/env')

const extractPages = require('./extractPages')
const generateSitemap = require('./generateSitemap')
const generateRSS = require('./generateRSS')

env.loadEnvConfig(process.cwd(), process.env.NODE_ENV === 'development')

const pages = extractPages()
generateSitemap(pages)
generateRSS(pages)
