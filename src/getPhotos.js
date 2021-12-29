import fetch from 'node-fetch'

const response = fetch(`https://api.unsplash.com/collections/${process.env.UNSPLASH_COLLECTION}/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&page=1&per_page=${process.env.UNSPLASH_COUNT}&order_by=latest`).then(res => res.json())

export default async (...slice) => ({
	width: process.env.UNSPLASH_WIDTH,
	maxHeight: process.env.UNSPLASH_MAX_HEIGHT,
	photos: (
		(Array.isArray(await response) ? await response : [])
		.slice(...slice)
		.map(({id, description: desc, urls: {raw}, width, height}) => ({
			id,
			desc,
			resolutions: Object.fromEntries([100, 200, 300, 400, 600, 800].map(_width => {
				const scale = _width / process.env.UNSPLASH_WIDTH

				return [scale, makeSize(scale, {raw, width, height})]
			}))
		}))
	)
})

const makeUnsplashURL = (raw, width) => `${raw}&q=${process.env.UNSPLASH_QUALITY}&fm=auto&w=${width}&fit=max`
const makeSize = (scale, original) => {
	const width = Math.ceil(scale * process.env.UNSPLASH_WIDTH)
	const height = Math.ceil(((scale * process.env.UNSPLASH_WIDTH) / original.width) * original.height)

	return {
		src: makeUnsplashURL(original.raw, width),
		width,
		height
	}
}
