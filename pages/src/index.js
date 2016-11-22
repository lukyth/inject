/* eslint-env browser */
/** @jsx h */

'use strict'

import { h, render } from 'preact'
import style from './style.css'

render((
  <div id='foo' className={style.div}>
    <span>Hello, world!</span>
    <button onClick={e => alert('hi!')}>Click Me</button>
  </div>
), document.body)
