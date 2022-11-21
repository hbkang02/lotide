const { exitCode } = require("process");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual}  !== ${expected}`);
  }
};

function findKey(object, cb) {
  //scan the object return the first key for which the cb returns a truthy value.
  //if no key, return undefined.
  const results = [];
  for(const items in object) {
    if (cb(object[items])){
      return items;
    } else {
      return undefined;
    }
  }

}


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"