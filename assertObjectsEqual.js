const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } return true;
};

//takes two objects and console.log an appropriate message
const eqObjects = function(object1, object2) {
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays((object1[key]), object2[key]));
        return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }

  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect

  if (eqObjects(actual, expected)) {
    onsole.log(`👌🏻👌🏻👌🏻Assertion Passed: $(inspect{actual}  === ${inspectexpected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${inspect(actual)}  !== ${inspectexpected}`);
  }
};