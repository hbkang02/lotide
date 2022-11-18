// eqArrays
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual}  !== ${expected}`);
  }
};

// implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// use assertEqual to write test cases for various scenarios.

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } return true;
};



//test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
eqArrays([1, 2, 3], [1, 2, 3]);