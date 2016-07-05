import fs from 'fs';
import request from 'request';

export function buildObjectsFromString(string, {delimiter: delimiter = /,(?!\s)/, toRemove: toRemove = []} = {}) {
  let processedString = processString(string, toRemove);
  let objectKeys = processedString.shift().split(delimiter);
  let objects = [];

  processedString.forEach(row => {
    if (!(row === "")) {
      objects.push(buildObject(objectKeys, row, delimiter));
    }
  });

  return objects;
}

export function processString(string, toRemove) {
  toRemove.forEach(el => {
    string = string.replace(new RegExp(el, 'g'), '');
  });
  return string.split("\n");
}

export function buildObject(keys, row, delimiter) { 
  let splitRow = row.split(delimiter);
  let newObject = {};

  splitRow.forEach((value, index) => {
    let key = keys[index];
    newObject[key] = value;
  });

  return newObject;
}

export function buildObjectsFromFile(filePath, {delimiter: delimiter = /,(?!\s)/, toRemove: toRemove = []} = {}) {
  var fileContent = fs.readFileSync(filePath).toString();
  return buildObjectsFromString(fileContent, {delimiter: delimiter, toRemove: toRemove});
}

export function buildObjectsFromUrl(url, {delimiter: delimiter = /,(?!\s)/, toRemove: toRemove = []} = {}, callback) {
  toRemove.push("\r");
  request(url, (err, res, body) => {
    if (err) throw err;

    let objs;
    if (res.statusCode == 200) {
      objs = buildObjectsFromString(body, {delimiter: delimiter, toRemove: toRemove});
    }
    callback(objs);
  });
}
