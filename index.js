/* eslint-env browser */

'use strict'

fetch('http://localhost:8080/pages')
  .then(res => res.text())
  .then(text => {
    const div = document.createElement('div')

    div.innerHTML = text

    const body = document.getElementsByTagName('body')[0]
    body.appendChild(div)
  })
