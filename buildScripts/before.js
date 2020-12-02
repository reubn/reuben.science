const env = require('@next/env')

const generateLists = require('./generateLists')

env.loadEnvConfig(process.cwd(), process.env.NODE_ENV === 'development')

generateLists()
