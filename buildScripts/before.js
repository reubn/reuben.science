const env = require('@next/env')

env.loadEnvConfig(process.cwd(), process.env.NODE_ENV === 'development')

const generateLists = require('./generateLists')

generateLists()
