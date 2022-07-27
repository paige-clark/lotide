/* NOTES:
INTAKE: a string
OUTPUT: an object containing arrays of the indices for each appearance of a letter
*/

const letterPositions = (str) => {
  const results = {};
  const workingStr = str.toLowerCase();
  for (let i = 0; i < workingStr.length; i++) {
    if (!results[workingStr[i]] && workingStr[i] !== " ") {
      results[workingStr[i]] = [i];
    } else if (results[workingStr[i]] && workingStr[i] !== " ") {
      results[workingStr[i]].push(i);
    }
  }
  return results;
};


// TESTING:
// const stringOne = 'Eggy';

// console.log(letterPositions(stringOne));

// // COMPARE TWO ARRAYS FOR EXACT MATCH AND LOGS MESSAGE
// const assertArraysEqual = (arrayOne, arrayTwo) => {
//   // if they are not the same length, false
//   if (arrayOne.length !== arrayTwo.length) {
//     console.log(`🔴🔴🔴 Arrays DON'T match: ${arrayOne} !== ${arrayTwo}`);
//     return false;
//   }

//   // if the index values don't match, false
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       console.log(`🔴🔴🔴 Arrays DON'T match: ${arrayOne} !== ${arrayTwo}`);
//       return false;
//     }
//   }

//   // otherwise return true
//   console.log(`🟢🟢🟢 Arrays DO match: ${arrayOne} === ${arrayTwo}`);
//   return true;
// };

// assertArraysEqual(letterPositions(stringOne).g, [1, 2]);



// const countLetters = (str) => {
//   let result = {};
//   const workingString = str.toLowerCase().replace(/\s/g, '');
//   for (const letter of workingString) {
//     if (!result[letter]) {
//       result[letter] = 1;
//     } else if (result[letter]) {
//       result[letter] ++;
//     }
//   }
//   return result;
// };
