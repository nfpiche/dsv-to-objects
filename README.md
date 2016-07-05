## DSV to Objects

Easily convert DSV string, files, and online resources into an array of javascript objects.  This will take the first line of your DSV file and use it as your new objects keys and every subsequent line will be converted to a new object.

## Installation

Available through npm, just run ```npm install dsv-to-objects```

## Usage

### The default delimiter will be a comma followed by NOT whitespace

```javascript
var dsvToObjects = require('dsv-to-objects');

var string = 'foo,bar,baz\nlorem,ipsum,dolor';
var filePath = 'path/to/file.csv';
var url = 'http://download/file.csv';
var callback = function(body) {
  console.log(body);
}

// Call with a string
dsvToObjects.buildObjectsFromString(string);

// Call with a file path
dsvToObjects.buildObjectsFromFile(filePath);

// Call with a url, this is async and requires a callback and at least and empty options object
dsvToObjects.buildObjectsFromUrl(url, {}, callback);

#=> { "foo": "lorem", "bar": "ipsum", "baz": "dolor" }
```

## All three methods also support an object of options
### buildObjectsFromString(string, {delimiter: delimiter, toRemove: toRemove})
### delimiter: whatever your chosen delimiter is, takes a string or regex
### toRemove: an array of characters you want to remove from your dsv file

```javascript
var dsvToObjects = require('dsv-to-objects');

var string = 'foo\tbar\tbaz\nAlorem\tAipsum\tAdolor';

// Call with string, tab delimited, and remove capital 'A' characters
dsvToObjects.buildObjectsFromString(string, {delimiter: "\t", toRemove: ["A"]);

#=> { "foo": "lorem", "bar": "ipsum", "baz": "dolor" }
```
