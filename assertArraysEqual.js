const eqArrays = require('./eqArrays');

//take in two arrays and console.log message/ pass or fail.
function assertArraysEqual(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${arr1}  === ${arr2}`);
    } else {
      console.log(`💩💩💩Assertion Failed: ${arr1}  !== ${arr2}`);
    }
  };
  

module.exports = assertArraysEqual;
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));

