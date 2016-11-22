/* eslint-env browser */
/** @jsx h */

'use strict'

import { h, render, Component } from 'preact'
import style from './style.css'
import logo from './images/simplesat.svg'
import icon from './images/megaphone.svg'

class Widget extends Component {
  state = {
    display: false
  }

  toggleDisplay = () => {
    this.setState({ display: !this.state.display })
  }

  render () {
    return (
      <div
        className={style.container}
        style={{
          transform: `translateY(${this.state.display ? '0' : '238px'})`
        }}>
        <div className={style.header}>
          <img className={style.icon} src={icon} />
          <span className={style.title}>Recent Feedback</span>
          <span
            className={style.arrow}
            style={{
              transform: `rotate(${this.state.display ? '-45' : '135'}deg)`,
              top: `${this.state.display ? '14' : '18'}px`
            }}
            onClick={this.toggleDisplay} />
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
    )
  }
}

render(<Widget />, document.body)
