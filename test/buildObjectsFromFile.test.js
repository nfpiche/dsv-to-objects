var should = require('chai').should();
var buildObjectsFromFile = require('../lib/index').buildObjectsFromFile;
var path = require('path');
var _ = require('underscore');

// We only need to test one thing here since most cases are covered in the 
// buildObjectsFromString test, which this method utilizes

describe('buildObjectsFromFile', function() {
  it('uses default arguments when none are given', function() {
    var result = buildObjectsFromFile(path.join(__dirname, '/test_file.csv'));
    var expectation = [
      { "name": "mario", "occupation": "plumber", "age": "31" },
      { "name": "peach", "occupation": "princess", "age": "31" }
    ]
    _.isEqual(result, expectation).should.equal(true);
  });
});
