function assertArraysEqual(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${arr1}  === ${arr2}`);
    } else {
      console.log(`💩💩💩Assertion Failed: ${arr1}  !== ${arr2}`);
    }
  };

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
      } 
  } 
  return true;
};
  
// function will return slice of the array with elements taken from the beginning. it should keep going until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  const arr1 = [];
  for(let arr of array)
    if(callback === true)
  return arr1;
};

assertArraysEqual(eqArrays([1, 2, 5, 7, 2, -1, 2, 4, 5], ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]));