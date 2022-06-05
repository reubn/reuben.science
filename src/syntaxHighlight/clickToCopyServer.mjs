import mdast from '../mdast.mjs'

import {copyFn, clearFn, strings} from './clickToCopy.mjs'

export default mdast(`
  <span dangerouslySetInnerHTML={{__html: '<button class="clickToCopy" onmousedown="${copyFn}(event)" onmouseup="${clearFn}(event)">${strings.copy}</button>'}}/>
`)
