# mocha-pug-lint
Runs [pug-lint](https://github.com/pugjs/pug-lint) as [mocha](https://github.com/mochajs/mocha) tests.

[![Build Status](https://travis-ci.org/jonatanpedersen/mocha-pug-lint.svg?branch=master)](https://travis-ci.org/jonatanpedersen/mocha-pug-lint)
[![Build Status](https://img.shields.io/npm/v/mocha-pug-lint.svg)](https://www.npmjs.com/package/mocha-pug-lint)
[![NSP Status](https://nodesecurity.io/orgs/jonatanpedersen/projects/1de17d93-0e43-41ad-902d-a76ec50cd02e/badge)](https://nodesecurity.io/orgs/jonatanpedersen/projects/1de17d93-0e43-41ad-902d-a76ec50cd02e)

## Install

``` bash
$ npm install mocha-pug-lint --save-dev
```

## Usage

### Syntax:
``` javascript
mochaPugLint(patterns, options);
```

Where patterns is an array of [glob patterns](https://github.com/jpillora/node-glob-all) and options are an object with [pug-lint rules](https://github.com/pugjs/pug-lint/blob/master/docs/rules.md).

### Example:

pug-lint.spec.js
``` javascript
const mochaPugLint = require('mocha-pug-lint');

mochaPugLint([
	'./test/files/**/*.pug'
], {
	disallowAttributeConcatenation: true
});
```

## License
MIT License

Copyright (c) 2017 [Jonatan Pedersen](https://www.jonatanpedersen.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
