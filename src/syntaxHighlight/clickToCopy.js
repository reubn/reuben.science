const copyFn = 'COPY_FN'
const clearFn = 'CLEAR_FN'

module.exports.ids = {
  copyFn,
  clearFn
}

module.exports.setUp = obj => {
  if(!obj) return

  obj[copyFn] = event => {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(event.target.parentElement.parentElement)
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
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
    dangerouslySetInnerHTML: {__html: `<button class="clickToCopy" onmousedown="${copyFn}(event)" onmouseup="${clearFn}(event)">Copy</button>`}
  },
  children: []
}
