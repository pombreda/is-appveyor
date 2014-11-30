'use strict';

var assert = require('assert');

var expected = process.argv[2] !== '--no-appveyor';

assert.strictEqual(require('./'), expected);
console.log('[Passed] require(\'is-appveyor\') should be ' + expected + '.');
