/* NOTES
- iterate through an object by its keys
- check each key against a callback function
- once an object value is found that matches the defined callback function
- return the name of the object key
*/

// CHECKS AN OBJECT TO SEE IF IT CONTAINS A VALUE PASSED IN THROUGH
// A CALLBACK FUNCTION.
const findKey = (obj, callback) => {
  for (let value in obj) {
    if (callback(obj[value])) {
      return value;
    }
  }
};

// //TESTING:
// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 9 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 14 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars < 2)); // => "Blue Hill"

module.exports = findKey;

// // ASSERT EQUALS FUNCTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 9 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 14 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars < 2), 'Blue Hill')