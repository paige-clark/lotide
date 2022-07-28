// COMPARE TWO ARRAYS FOR EXACT MATCH AND LOGS MESSAGE
const assertArraysEqual = (arrayOne, arrayTwo) => {
  const inspect = require('util').inspect;
  // if they are not the same length, false
  if (arrayOne.length !== arrayTwo.length) {
    console.log(`🔴🔴🔴 Arrays DON'T match: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
    return false;
  }

  // if the index values don't match, false
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`🔴🔴🔴 Arrays DON'T match: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
      return false;
    }
  }

  // otherwise return true
  console.log(`🟢🟢🟢 Arrays DO match: ${inspect(arrayOne)} === ${inspect(arrayTwo)}`);
  return true;
};