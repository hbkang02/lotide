const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } return true;
};


//take in two arrays and console.log message/ pass or fail.
function assertArraysEqual(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${arr1}  === ${arr2}`);
    } else {
      console.log(`💩💩💩Assertion Failed: ${arr1}  !== ${arr2}`);
    }
  };
  


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
