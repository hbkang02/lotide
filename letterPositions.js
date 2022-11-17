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
// return results => position of the words (not including " ") in object of arrays


// count each letters seperately. (splite, join)
// iterate seperated letters (for loop or for...of loop/ increment using new variable) ***
// if " ", do not include
// increment the position of the letters in an array.
// for each letter in results object, create an array (.push) ***

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== " ") {
    
      if(!results[sentence[i]]) {
        results[sentence[i]] = [i]
      }
        results[sentence[i]].push(i);
    }
  }
  return results;
}; 

console.log(letterPositions("hello lighthouse is here"));
assertArraysEqual(letterPositions("hello").e, [1]);
