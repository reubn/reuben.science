export default resolutions => {
  const array = Array.isArray(resolutions) ? resolutions : Object.values(resolutions)

  return array.map(({src, width}) => `${src} ${width}w`).join(', ')
}
