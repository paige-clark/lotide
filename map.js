/* NOTES:
INTAKE: an array to map, a callback function
- create a function that takes in an array and a callback param
- iterate through the array
- act on each element of the array
- push the modified array element to an empty array
- return the new array
OUTPUT: a new array based on the result of the callback function
*/

// TEST ARRAY:
// const words = ["ground", "control", "to", "major", "tom"];

// FUNCTION THAT TAKES IN AN ARRAY AND MODIFIES EACH ELEMENT
// BASED ON A CALLBACK FUNCTION
const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

//TESTING: the anon function returns a string with the word, but it can
//         return the word modified in any way.
// const result = map(words, word => `The word is: ${word}`);
// console.log(result);

// COMPARE TWO ARRAYS FOR EXACT MATCH AND LOGS MESSAGE
// ALSO RETURNS TRUE OR FALSE
// const assertArraysEqual = (arrayOne, arrayTwo) => {
//   if (arrayOne.length !== arrayTwo.length) {
//     console.log(`🔴🔴🔴 Arrays DON'T match: ${arrayOne} !== ${arrayTwo}`);
//     return false;
//   }
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       console.log(`🔴🔴🔴 Arrays DON'T match: ${arrayOne} !== ${arrayTwo}`);
//       return false;
//     }
//   }
//   console.log(`🟢🟢🟢 Arrays DO match: ${arrayOne} === ${arrayTwo}`);
//   return true;
// };

// assertArraysEqual(map([2, 2, 4], (num) => {
//   if (num === 2) {
//     return `omg ${num}`
//   }
//   return `it's ${num}`
// }), [ 'omg 2', 'omg 2', "it's 4" ]);

// console.log(map([2, 2, 4], (num) => {
//   if (num === 2) {
//     return `omg ${num}`
//   }
//   return `it's ${num}`
// })
// );
