import fetch from 'node-fetch'

const response = fetch(`https://api.unsplash.com/users/${process.env.UNSPLASH_USERNAME}/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&page=1&per_page=${process.env.UNSPLASH_COUNT}&order_by=latest`).then(res => res.json())

export default async () => {
	const json = await response

  return json.map(({id, urls: {small}}) => ({src: small, id}))
}
