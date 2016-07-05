var should = require('chai').should();
var buildObjectsFromString = require('../lib/index').buildObjectsFromString;
var _ = require('underscore');

describe('buildObjectsFromString', function() {
  it('uses default arguments when none are given', function() {
    var commaSeperatedValues = "name,occupation,age\nmario,plumber,31\npeach,princess,31\n"
    var result = buildObjectsFromString(commaSeperatedValues);
    var expectation = [
      { "name": "mario", "occupation": "plumber", "age": "31" },
      { "name": "peach", "occupation": "princess", "age": "31" }
    ]
    _.isEqual(result, expectation).should.equal(true);
  });

  it('uses passed in arugments when they are given', function() {
    var tabSeperatedValues = "name\toccupation\tage\nmario\tplumber\t31\npeach\tprincess\t31"
    var result = buildObjectsFromString(tabSeperatedValues, {delimiter: "\t", toRemove: ["m"]});
    var expectation = [
      { "nae": "ario", "occupation": "pluber", "age": "31" },
      { "nae": "peach", "occupation": "princess", "age": "31" }
    ]
    _.isEqual(result, expectation).should.equal(true);
  });

  it('handles weird unrecommended delimiters', function() {
    var lolSeperatedValues = "nameloloccupationlolage\nmariololplumberlol31\npeachlolprincesslol31"
    var result = buildObjectsFromString(lolSeperatedValues, {delimiter: "lol"});
    var expectation = [
      { "name": "mario", "occupation": "plumber", "age": "31" },
      { "name": "peach", "occupation": "princess", "age": "31" }
    ]
    _.isEqual(result, expectation).should.equal(true);
  });

  it('handles multiple characters you want to be removed', function() {
    var commaSeperatedValues = "name,occupation,age\nmario,plumber,31\npeach,princess,31"
    var result = buildObjectsFromString(commaSeperatedValues, {toRemove: ["m", "p"]});
    var expectation = [
      { "nae": "ario", "occuation": "luber", "age": "31" },
      { "nae": "each", "occuation": "rincess", "age": "31" }
    ]
    _.isEqual(result, expectation).should.equal(true);
  });
});
