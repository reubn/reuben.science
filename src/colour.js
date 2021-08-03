export default (colour, second=colour+'-hint') => ({
  colour: `var(--colours-${colour})`,
  hint: `var(--colours-${second})`,
  gradient: `linear-gradient(135deg, var(--colours-${colour}) 0%, var(--colours-${second}) 100%)`
})
