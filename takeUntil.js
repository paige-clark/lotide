/*
a function that iterates through an array, collecting items, until it finds a truthy value
INPUT: function that takes in an array and a callback function
-
OUTPUT: a slice of an array with elements taken from the beginning
*/

// ITERATES THROUGH ARRAY UNTIL RULES OF CALLBACK RETURN TRUE
const takeUntil = (array, callback) => {
  let result = [];
  for (let item of array) {
    if (callback(item) === false) {
      result.push(item);
    } else break;
  }
  return result;
};

module.exports = takeUntil;

// TEST INPUTS
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1); // [ 1, 2, 5, 7, 2 ]

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// // COMPARE TWO ARRAYS FOR EXACT MATCH AND LOGS MESSAGE
// const assertArraysEqual = (arrayOne, arrayTwo) => {
//   const inspect = require('util').inspect;
//   // if they are not the same length, false
//   if (arrayOne.length !== arrayTwo.length) {
//     console.log(`🔴🔴🔴 Arrays DON'T match: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
//     return false;
//   }

//   // if the index values don't match, false
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       console.log(`🔴🔴🔴 Arrays DON'T match: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
//       return false;
//     }
//   }

//   // otherwise return true
//   console.log(`🟢🟢🟢 Arrays DO match: ${inspect(arrayOne)} === ${inspect(arrayTwo)}`);
//   return true;
// };

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])