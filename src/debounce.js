export default (fn, timeout) => {
  let timer

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), timeout)
  }
}
