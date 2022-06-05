import {copyFn, clearFn, strings} from './clickToCopy.mjs'

export default obj => {
  if(!obj) return

  obj[copyFn] = event => {
    const selection = window.getSelection()
    const range = document.createRange()

    range.selectNodeContents(event.target.parentElement.parentElement)
    selection.removeAllRanges()
    selection.addRange(range)

    if(document.execCommand('copy')) {
      event.target.innerHTML = strings.done
      event.target.classList.add(strings.doneClass)

      event.target.parentElement.parentElement.addEventListener('mouseleave', () => {
        event.target.innerHTML = strings.copy;
        event.target.classList.remove(strings.doneClass)
      }, {once: true})
    }
  }

  obj[clearFn] = event => {
    const selection = window.getSelection()
    selection.removeAllRanges()
  }
}
