import gradient from '@/src/gradient.js'

const categories = {
  dev: gradient('blue'),
  make: gradient('indigo'),
  hardware: gradient('purple'),
  medicine: gradient('pink'),
  food: gradient('orange'),
  automation: gradient('yellow'),
  outdoors: gradient('green')
}

export default categories

const keys = Object.keys(categories)

export const sort = (a, b) => keys.indexOf(a) - keys.indexOf(b)
