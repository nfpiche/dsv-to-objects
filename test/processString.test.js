var should = require('chai').should();
var processString = require('../lib/index').processString;
var _ = require('underscore');

describe('processString', function() {
  it('always removes newlines', function() {
    var result = processString("hello\nworld", []);
    var expectation = ["hello", "world"];
    _.isEqual(result, expectation).should.equal(true);
  });

  it('replaces specified characters with empty strings', function() {
    var result = processString("hello\nworld", ["h", "l"]);
    var expectation = ["eo", "word"];
    _.isEqual(result, expectation).should.equal(true);
  });
});
