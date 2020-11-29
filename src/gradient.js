export default (colour, second=colour+'-hint') => `linear-gradient(135deg, var(--colours-${colour}) 0%, var(--colours-${second}) 100%)`
