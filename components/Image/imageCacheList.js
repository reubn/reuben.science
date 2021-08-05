const imageCacheList = () => {
  if(typeof localStorage === 'undefined') return {add: () => 1, has: () => 0}

  const localStorageKey = 'IMAGE_CACHE_LIST'

  const saved = JSON.parse(localStorage.getItem(localStorageKey)) || []
  const set = new Set(saved)

  const save = () => localStorage.setItem(localStorageKey, JSON.stringify([...set]))

  const add = url => set.add(url) && save()
  const has = url => set.has(url)

  return {
    add,
    has
  }
}

export default imageCacheList()
