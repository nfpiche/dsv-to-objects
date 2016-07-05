var should = require('chai').should();
var buildObject = require('../lib/index').buildObject;
var _ = require('underscore');

describe('buildObject', function() {
  it('builds expected object based on delimiter and keys', function() {
    var keys = ["foo", "bar", "baz"]
    var row = "lorem,ipsum,dolor";
    var delimiter = ",";
    var result = buildObject(keys, row, delimiter);
    var expectation = {"foo": "lorem", "bar": "ipsum", "baz": "dolor"};
    _.isEqual(result, expectation).should.equal(true);
  });
});
