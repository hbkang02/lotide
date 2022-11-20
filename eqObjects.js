const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length || i < arr2.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } return true;
};

// return true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   for (const item1 in object1) {
//     for (const item2 in object2) {
//       if(item1.length === item2.length){
//         return true;
//       } else if (item1 === item2) {
//         return true;
//       }
//     }
//     return false;
//   }
// };

const eqObjects = function(object1, object2) {
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays((object1[key]), object2[key]));
        return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }

  }
  return true;
}
//incomplete

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);