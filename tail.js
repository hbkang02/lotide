const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};


const words = ["Yo Yo"];
tail(words);
assertEqual(words.length, 3);