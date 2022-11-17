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

//take in two arrays and console.log message/ pass or fail.
function assertArraysEqual(a, b) {
  if (eqArrays(a, b)) {
    console.log(`Assertion Passed`);
  } 
    console.log('Assertion failed');
};

assertArraysEqual("Lighthouse Labs", "Bootcamp");

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
