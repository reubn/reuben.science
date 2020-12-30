const fs = require('fs')
const path = require('path')

const ANALYTICS_FILE = '.analytics.js'

module.exports = async () => {
    const analyticsJSON = {
      token: process.env.ANALYTICS_TOKEN,
      send: {
        to: '/cdn-cgi/rum'
      }
    }

    const analyticsText = await fs.promises.readFile(path.join(process.cwd(), 'src/analytics.js'), 'utf8');
    const modifiedAnalyticsText = analyticsText
      .replace(/^!function/, `module.exports = () => !function`)
      .replace('document.currentScript', `{getAttribute: () => '${JSON.stringify(analyticsJSON)}'}`)

    await fs.promises.writeFile(path.join(process.cwd(), 'src', ANALYTICS_FILE), modifiedAnalyticsText);

    console.log('Generated Analytics')
}
