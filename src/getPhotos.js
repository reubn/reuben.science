import fetch from 'node-fetch'

const response = fetch(`https://api.unsplash.com/users/${process.env.UNSPLASH_USERNAME}/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&page=1&per_page=${process.env.UNSPLASH_COUNT}&order_by=latest`).then(res => res.json())

export default async (...slice) => ({
	size: process.env.UNSPLASH_SIZE,
	photos: (
		(await response)
		.slice(...slice)
		.map(({id, urls: {raw}}) => ({id, src: `${raw}&q=${process.env.UNSPLASH_QUALITY}&fm=auto&w=${process.env.UNSPLASH_SIZE}&fit=max`}))
	)
})
