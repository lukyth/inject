/* eslint-env browser */
/** @jsx h */

'use strict'

import { h, render, Component } from 'preact'
import style from './style.css'
import logo from './images/simplesat.svg'
import icon from './images/megaphone.svg'

class Widget extends Component {
  state = {
    display: false,
    currentSlide: 0,
    feedbacks: [
      {
        feedback: `As always Mark was extremely responsive, kind, polite and professional in his handling of this ticket. I only have good things to say about Mark's delivery! ...`,
        name: `Mark Z.`,
        date: `November 1, 2016`
      },
      {
        feedback: `As always Mark was extremely responsive, kind, polite and professional in his handling of this ticket. I only have good things to say about Mark's delivery! ...`,
        name: `Kanitkrn S.`,
        date: `November 2, 2016`
      },
      {
        feedback: `As always Mark was extremely responsive, kind, polite and professional in his handling of this ticket. I only have good things to say about Mark's delivery! ...`,
        name: `JFK`,
        date: `November 3, 2016`
      }
    ]
  }

  toggleDisplay = () => {
    this.setState({ display: !this.state.display })
  }

  moveForward = () => {
    if (this.state.currentSlide === 2) return
    this.setState({ currentSlide: this.state.currentSlide + 1 })
  }

  moveBackward = () => {
    if (this.state.currentSlide === 0) return
    this.setState({ currentSlide: this.state.currentSlide - 1 })
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
          <div className={style.navLeftContainer} onClick={this.moveBackward}>
            <span className={style.navLeft} />
          </div>
          <div className={style.slideWrapper}>
            <div
              className={style.slideContainer}
              style={{
                width: `${288 * this.state.feedbacks.length}px`,
                transform: `translateX(-${288 * this.state.currentSlide}px)`
              }}>
              {this.state.feedbacks.map(feedback => (
                <div className={style.slideContent}>
                  <p className={style.content}>{feedback.feedback}</p>
                  <p className={style.name}>{feedback.name}</p>
                  <p className={style.date}>{feedback.date}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={style.navRightContainer} onClick={this.moveForward}>
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
