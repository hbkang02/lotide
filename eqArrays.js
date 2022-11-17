const assertEqual = function(actual, expected) {
  if ((actual === expected)) {
    return console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${actual}  === ${expected}`);
  } 
    return console.log(`💩💩💩Assertion Failed: ${actual}  !== ${expected}`);
  };

 
  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && (eqArrays(arr1[i], arr2[i]) === false)) {
        return false;
      }
      if (!(Array.isArray(arr1[i])) && arr1[i] !== arr2[i]) {
        return false;
      }
    } 
    return true;
  };

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));