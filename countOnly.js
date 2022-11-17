/*
const countOnly = function(allItems, itemsToCount) {
  let count = 0;
  for (var item in itemsToCount) {
    count = 0;
      for (var items of allItems) {
        if (item === allItems[i]) {
          count++;
        }
      }
    ItemsToCount[Item] = count;
  }
};
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌🏻👌🏻👌🏻Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual}  !== ${expected}`);
  }
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];




const countOnly = function(allItems, itemsToCount){
  const results = {};
  for (const items in allItems) {
    if(itemsToCount[items]) {
      if (results[items]) {
        results[items] += 1;
      } else {
        results[items] = 1;
    }
  }
  return results;
}
};
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

