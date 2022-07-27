/* NOTES:
INTAKE: a string
- define and empty object
- set the sting to lower case to reset it
- get rid of spaces in the string
- iterate through the string
- check if empty result object has the character in it
  * if it doesn't, set the count to 1
  * if it doesn, increment it
- return the object
OUTPUT: a count of all letters in the string as an object
*/

const countLetters = (str) => {
  let result = {};
  const workingString = str.toLowerCase().replace(/\s/g, '');
  for (const letter of workingString) {
    if (!result[letter]) {
      result[letter] = 1;
    } else if (result[letter]) {
      result[letter] ++;
    }
  }
  return result;
};

// TESTING
// ASSERT EQUAL
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const inputOne = 'lighthouse in the house'
// const checkOne = countLetters(inputOne);

// assertEqual(checkOne.t, 2);
// assertEqual(checkOne['z'], undefined);