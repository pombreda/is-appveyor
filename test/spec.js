'use strict';

var test = require('tape');
var isAppVeyor = require('../');

module.exports = function spec(expected) {
  test('isAppVeyor', function(t) {
    t.plan(1);
    t.strictEqual(isAppVeyor, expected, 'should return ' + expected + '.');
  });
};
