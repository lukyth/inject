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
      <span className={style.title}>Recent Feedback</span>
      <span className={style.arrow} />
    </div>
    <div className={style.body}>
      <div className={style.navLeftContainer}>
        <span className={style.navLeft} />
      </div>
      <div className={style.slideContainer}>
        <div className={style.slideContent}>
          <p className={style.content}>As always Mark was extremely responsive, kind, polite and professional in his handling of this ticket. I only have good things to say about Mark's delivery! ...</p>
          <p className={style.name}>Mark Z.</p>
          <p className={style.date}>November 1, 2016</p>
        </div>
      </div>
      <div className={style.navRightContainer}>
        <span className={style.navRight} />
      </div>
    </div>
    <div className={style.footer}>
      <span className={style.poweredBy}>Powered by</span>
      <img className={style.logo} src={logo} />
    </div>
  </div>
), document.body)
