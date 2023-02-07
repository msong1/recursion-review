// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // requirement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  // your code goes here

  // prep
  // declare a variable
  var result = '';
  var types = ['number', 'boolean', 'undefined', 'string'];
  // base case
  // if there's no other layer
  // return a string
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (types.includes(typeof obj)) {
    return String(obj);
  }


  // recursive case
  // check if obj is array
  // iterate over the array
  if (Array.isArray(obj)) {
    obj.forEach(function(item) {
      result += stringifyJSON(item) + ',';
    });
    result = '[' + result.slice(0, -1) + ']';
  } else if (typeof obj === 'object') {
    var kvPairs = Object.entries(obj); // [[k,v],[k,v]] ==> "{"x":5,"y":6}"
    kvPairs.forEach(function (pair) {
      var keyStringified = stringifyJSON(pair[0]);
      var valueStringified = stringifyJSON(pair[1]);
      if (['function', 'undefined'].includes(typeof pair[1])) {
        // continue;
      } else {
        result += keyStringified + ':' + valueStringified + ',';
      }
    });
    result = '{' + result.slice(0, -1) + '}';
  }
  return result;
};