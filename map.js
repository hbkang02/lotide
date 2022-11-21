function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//take in two arrays and console.log message/ pass or fail.
function assertArraysEqual(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${arr1}  === ${arr2}`);
    } else {
      console.log(`💩💩💩Assertion Failed: ${arr1}  !== ${arr2}`);
     }
  };
  
const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, callback) {
 const result = [];
 for (const items of arr){
  result.push(callback(items));
 }
 return result;
}


// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item); // ground control to major tom
//     console.log('item AFTER: ', callback(item));// g,c,t,m,t
//     console.log('---');
//   }
//   return results;
// }

// const results1 = map(words, word);
// let word = function() {
//   return word[0];
// }
// console.log(results1);

