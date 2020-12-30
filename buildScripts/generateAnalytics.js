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
      // turn into module
      .replace(/^!function/, `module.exports = () => !function`)
      // inject correct path into timings
      .replace(/JSON\.stringify/g, `(_ =>{const __=_;return JSON.stringify((__&&typeof __=== 'object'&&__.hasOwnProperty('timingsV2') ? (__.timingsV2.name = window.location.href, __) : _))})`)
      // inject config
      .replace('document.currentScript', `{getAttribute: () => '${JSON.stringify(analyticsJSON)}'}`)

    await fs.promises.writeFile(path.join(process.cwd(), 'src', ANALYTICS_FILE), modifiedAnalyticsText);

    console.log('Generated Analytics')
}
