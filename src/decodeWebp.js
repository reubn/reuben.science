import {WebpMachine} from 'webp-hero'
import {loadBinaryData} from 'webp-hero/dist-cjs/load-binary-data'

if(!window._webpMachine) window._webpMachine = new WebpMachine()

const decode = async function(src){
  if (await window._webpMachine.webpSupport) return
    if (window._webpMachine.cache[src]) return window._webpMachine.cache[src]
    try {
      const webpData = await loadBinaryData(src)
      const pngData = await window._webpMachine.decode(webpData)
      return  window._webpMachine.cache[src] = pngData
    }
    catch (error) {
      error.name = 'WebpMachineError'
      error.message = `failed to polyfill image "${src}": ${error.message}`
      throw error
    }
}



export default async (...args) => {
  let failures = 0
  const wrapper = (...args) => decode(...args).catch(() => ++failures <= 5 && new Promise(resolve => setTimeout(resolve, 10)).then(() => wrapper(...args)))

  return wrapper(...args)
}
