# Lines Iterator

> Iterates over lines, es6 way.

[![travis][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url]

[travis-image]: https://img.shields.io/travis/ngryman/lines-iterator.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/lines-iterator
[codecov-image]: https://img.shields.io/codecov/c/github/ngryman/lines-iterator.svg
[codecov-url]: https://codecov.io/github/ngryman/lines-iterator


**lines-iterator** allows you to iterate over lines via a `es6` iterator.

## Install

```bash
npm install --save lines-iterator
```

## Usage

```javascript
const lines = require('lines-iterator')

for (let line of lines('first\nsecond')) {
  console.log(`LINE: ${line}`)
}

// => LINE: first
// => LINE: second
```

## API

### `lines(text[, options])`

#### `text` <sup><sub>`{string}`</sub></sup>

Text containing `eol` characters.

#### `options` <sup><sub>`{object}`</sub></sup>

##### `ignoreEmpty` <sup><sub>`{boolean}`</sub></sup>

Ignore empty lines.

```javascript
const text = `
first

second
`

for (let line of lines(text, { ignoreEmpty: true })) {
  console.log(`LINE: ${lines}`)
}

// => LINE: first
// => LINE: second
```

## License

MIT © [Nicolas Gryman](http://ngryman.sh)
