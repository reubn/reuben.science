import fetch from 'node-fetch'

const response = fetch(`https://api.unsplash.com/collections/${process.env.UNSPLASH_COLLECTION}/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&page=1&per_page=${process.env.UNSPLASH_COUNT}&order_by=latest`).then(res => res.json())

export default async (...slice) => ({
	width: process.env.UNSPLASH_SIZE,
	photos: (
		(Array.isArray(await response) ? await response : [])
		.slice(...slice)
		.map(({id, description: desc, urls: {raw}, width, height}) => ({id, desc, height: Math.ceil((process.env.UNSPLASH_SIZE/width) * height), src: `${raw}&q=${process.env.UNSPLASH_QUALITY}&fm=auto&w=${process.env.UNSPLASH_SIZE}&fit=max`}))
	)
})
