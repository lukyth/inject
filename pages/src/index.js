/* eslint-env browser */
/** @jsx h */

'use strict'

import { h, render } from 'preact'
import style from './style.css'
import logo from './images/simplesat.svg'
import icon from './images/megaphone.svg'

render((
  <div className={style.container}>
    <div className={style.header}>
      <img className={style.icon} src={icon} />
    </div>
    <div className={style.footer}>
      <img className={style.logo} src={logo} />
    </div>
  </div>
), document.body)
