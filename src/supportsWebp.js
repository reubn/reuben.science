import {detectWebpSupport} from "webp-hero/dist-cjs/detect-webp-support"

let webpSupport = undefined

export default async () => webpSupport !== undefined ? webpSupport : detectWebpSupport().then(support => webpSupport=support)
