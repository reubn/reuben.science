import {WebpMachine} from 'webp-hero'

import loadWebp from './loadWebp'

const webpMachine = new WebpMachine()

const process = async function(srcOrData){
  const decode = async data => {
    try {
      return webpMachine.decode(data)
    }
    catch (error) {
      error.name = 'WebpMachineError'
      error.message = `failed to polyfill image "${src}": ${error.message}`
      throw error
    }
  }

  if(!(typeof srcOrData === 'string')) return decode(srcOrData)
  if (await webpMachine.webpSupport) return
  if (webpMachine.cache[srcOrData]) return webpMachine.cache[srcOrData]
  const webpData = await loadWebp(srcOrData)

  const pngData = await decode(webpData)

  webpMachine.cache[srcOrData] = pngData

  return pngData
}



export default async (...args) => {
  let failures = 0
  const wrapper = (...args) => process(...args).catch(error => ++failures <= 10 ? (new Promise(resolve => setTimeout(resolve, failures * 200)).then(() => wrapper(...args))) : console.log('max tries', error))

  return wrapper(...args)
}
