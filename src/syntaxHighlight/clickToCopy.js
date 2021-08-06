const copyFn = 'COPY_FN'
const clearFn = 'CLEAR_FN'

module.exports.ids = {
  copyFn,
  clearFn
}

module.exports.strings = {
  copy: 'Copy',
  done: 'Done',
  doneClass: 'done'
}

module.exports.setUp = obj => {
  if(!obj) return

  obj[copyFn] = event => {
    const selection = window.getSelection()
    const range = document.createRange()

    range.selectNodeContents(event.target.parentElement.parentElement)
    selection.removeAllRanges()
    selection.addRange(range)

    if(document.execCommand('copy')) {
      event.target.innerHTML = module.exports.strings.done
      event.target.classList.add(module.exports.strings.doneClass)

      event.target.parentElement.parentElement.addEventListener('mouseleave', () => {
        event.target.innerHTML = module.exports.strings.copy;
        event.target.classList.remove(module.exports.strings.doneClass)
      }, {once: true})
    }
  }

  obj[clearFn] = event => {
    const selection = window.getSelection()
    selection.removeAllRanges()
  }
}

module.exports.element = {
  type: 'element',
  tagName: 'span',
  properties: {
    dangerouslySetInnerHTML: {__html: `<button class="clickToCopy" onmousedown="${copyFn}(event)" onmouseup="${clearFn}(event)">${module.exports.strings.copy}</button>`}
  },
  children: []
}
