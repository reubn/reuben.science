export const copyFn = 'COPY_FN'
export const clearFn = 'CLEAR_FN'

export const strings = {
  copy: 'Copy',
  done: 'Done',
  doneClass: 'done'
}

export const setUp = obj => {
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

export const element = {
  "type": "mdxJsxFlowElement",
  "name": "span",
  "attributes": [
    {
      "type": "mdxJsxAttribute",
      "name": "dangerouslySetInnerHTML",
      "value": {
        "type": "mdxJsxAttributeValueExpression",
        "data": {
          "estree": {
            "type": "Program",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "name": "__html"
                      },
                      "value": {
                        "type": "Literal",
                        "value": "<button class=\"clickToCopy\" onmousedown=\"COPY_FN(event)\" onmouseup=\"CLEAR_FN(event)\">Copy</button>"
                      },
                      "kind": "init"
                    }
                  ]
                }
              }
            ]
          }
        }
      }
    }
  ],
  "children": []
}
