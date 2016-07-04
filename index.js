'use strict'

const EOL = require('os').EOL

/**
 * Create a iterator that iterates over lines.
 *
 * @param {string} text
 * @param {object} options
 */
function * lines(text, options) {
  let offset = 0
  let eolLen = EOL.length
  let index

  options = options || {}

  while (-1 !== (index = text.indexOf(EOL, offset))) {
    const len = index - offset

    if (0 === len && options.ignoreEmpty) {
      offset++
      continue
    }

    yield text.substr(offset, index - offset)
    offset = index + eolLen
  }
  yield text.substr(offset)
}

module.exports = lines
