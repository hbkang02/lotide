const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual}  !== ${expected}`);
  }
};



const countLetters = function(sentence) {
  let divSentence = sentence.split(" ").join("");
  const count = {};
  for (const letters of sentence) {
    if (letters !== " ") {
      if (count[letters]) {
        count[letters] += 1;
      } else {
      count[letters] = 1;
    }
  }
  }
  return count;
};

console.log(countLetters("lighthouse"));
// countLetters will change sentence in string (for of loop)
// exclude " " 
// return count of each letters

