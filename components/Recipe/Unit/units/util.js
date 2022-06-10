export const isApprox = (numbers, positive, threshold=0.0000001) => value => {
  const comparisonOperator = positive ? (a, b) => (a <= b) : (a, b) => (a >= b)
  const tests = numbers.map(number => comparisonOperator(Math.abs(value - number), threshold))

  return positive ? tests.some(x => x) : tests.every(x => x)
}