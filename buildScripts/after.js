const env = require('@next/env')

env.loadEnvConfig(process.cwd(), process.env.NODE_ENV === 'development')

const extractPages = require('./extractPages')
const generateSitemap = require('./generateSitemap')
const generateRSS = require('./generateRSS')

const pages = extractPages()
generateSitemap(pages)
generateRSS(pages)
