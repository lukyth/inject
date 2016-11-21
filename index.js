/* eslint-env browser */

'use strict'

// Ref: https://www.html5rocks.com/en/tutorials/speed/script-loading/
const scriptURL = 'http://localhost:8080/pages/dist/bundle.js'
const pendingScripts = []
const firstScript = document.scripts[0]

// Watch scripts load in IE
function stateChange () {
  // Execute as many scripts in order as we can
  let pendingScript
  while (pendingScripts[0] && pendingScripts[0].readyState === 'loaded') {
    pendingScript = pendingScripts.shift()
    // avoid future loading events from this script (eg, if src changes)
    pendingScript.onreadystatechange = null
    // can't just appendChild, old IE bug if element isn't closed
    firstScript.parentNode.insertBefore(pendingScript, firstScript)
  }
}

if ('async' in firstScript) { // modern browsers
  const script = document.createElement('script')
  script.async = false
  script.src = scriptURL
  document.head.appendChild(script)
} else if (firstScript.readyState) { // IE<10
  // create a script and add it to our todo pile
  const script = document.createElement('script')
  pendingScripts.push(script)
  // listen for state changes
  script.onreadystatechange = stateChange
  // must set src AFTER adding onreadystatechange listener
  // else we’ll miss the loaded event for cached scripts
  script.src = scriptURL
} else { // fall back to defer
  document.write('<script src="' + scriptURL + '" defer></' + 'script>')
}
