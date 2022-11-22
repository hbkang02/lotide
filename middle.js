const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


//take in two arrays and console.log message/ pass or fail.


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
    return middleNum;
  } else {
    const oddArr = Math.floor(array.length / 2);
    middleNum.push(array[oddArr]);
    return middleNum;
  }
};

// console.log(middle([1])); // empty array
// assertArraysEqual(middle([1, 2])); // empty array

// console.log(middle([1, 2, 3])); // [2]
// middle([1, 2, 3, 4, 5]) // => 3

// middle([1, 2, 3, 4])// => [2, 3];

module.exports = middle;
