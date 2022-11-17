const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

function findKeyByValue(obj, value) {
  const findKey = Object.keys(obj); 
// method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// already looped 
  for (const key of findKey) {
    if (obj[key] === value) {
      return key;
    }
  }
}
// need findKeyByValue function to find key by implementing objects and values
// 

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
// list out keys
//  obj[key] = bestTVShowsByGenre[key] => bestTVShowsByGenre(sci_fi)
// if "the Expanse" === "the Expanse" return key => return sci_fi;
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
