import c from '@/src/colour'

export default (colour, second=c('hint', colour)) => `linear-gradient(135deg, ${c(colour)} 0%, ${c(second)} 100%)`
