import test from 'ava'
import lines from './'
import { EOL } from 'os'

function linesArray(text, options) {
  const textWithLines = text.replace(/\s/g, EOL)
  return Array.from(lines(textWithLines, options))
}

test('iterate through lines', t => {
  const text = 'one two three four'
  const res = linesArray(text)
  t.deepEqual(res, text.split(' '))
})

test('iterate through multiple empty lines', t => {
  const text = 'one  two three four'
  const res = linesArray(text)
  t.deepEqual(res, text.split(' '))
})

test('can ignore empty lines', t => {
  const text = 'one  two three four'
  const res = linesArray(text, { ignoreEmpty: true })
  t.deepEqual(res, text.split(/ +/g))
})
