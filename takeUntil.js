function assertArraysEqual(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${actual}  === ${expected}`);
    } else {
      console.log(`💩💩💩Assertion Failed: ${actual}  !== ${expected}`);
    }
  };

  const eqArrays = function(arr1, arr2) {
    for (let i = 0; i < arr1.length || i < arr2.length; ++i) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
    } return true;
  };
  
  
  
// function will return slice of the array with elements taken from the beginning. it should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  for(let arr of array)
    if(callback(arr) === false) {
      result.push(arr);
    }
  return results;
};
