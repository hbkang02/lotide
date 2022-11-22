const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});

it("returns '[5,6,7]' for ['5']", () => {
  assert.strictEqual(head([5,6,7]), 5); 
});

// it("returns '(["Hello", "Lighthouse", "Labs"]), "Hello")' for "Hello" () => {
//   assert.strictEqual((["Hello", "Lighthouse", "Labs"]), "Hello"); 
// });


