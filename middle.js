const eqArrays = function (arr1, arr2) {
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


const middle = function (array) {
  //iterate through all arrays and find middle number if array has more than 1 or 2 arrays
  //if array is even, return array/2 array/2 -1
  //use push method, Math.floor 
  let middleNum = [];
  if (array.length <= 2) {
    return middleNum;

  } else if (array.length % 2 === 0) {
    middleNum.push(Math.floor(array[array.length / 2] - 1));
    middleNum.push(Math.floor(array[array.length / 2]));
    
  } else if (array.length % 2 !== 0) {
    return middleNum.push(Math.floor(array[array.length / 2]));
  }
};

console.log(middle([1])); // empty array
middle([1, 2]) // empty array

console.log(middle([1, 2, 3])); // [2]
middle([1, 2, 3, 4, 5]) // => 3

middle([1, 2, 3, 4])// => [2, 3];
