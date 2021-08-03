import colour from '@/src/colour.js'

const categories = {
  dev: colour('blue'),
  make: colour('indigo'),
  hardware: colour('purple'),
  medicine: colour('pink'),
  food: colour('orange'),
  automation: colour('yellow'),
  outdoors: colour('green')
}

export default categories

const keys = Object.keys(categories)

export const sort = (a, b) => keys.indexOf(a) - keys.indexOf(b)
