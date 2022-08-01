const eqArrays = require('./eqArrays');
const inspect = require('util').inspect;

// COMPARE TWO ARRAYS FOR EXACT MATCH AND LOGS MESSAGE 
const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (!eqArrays(arrayOne, arrayTwo)) {
    console.log(`🔴🔴🔴 Arrays DON'T match: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
  }
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🟢🟢🟢 Arrays DO match: ${inspect(arrayOne)} === ${inspect(arrayTwo)}`);
  }
};

// EXAMPLE INPUT: assertArraysEqual([1,3,3], [1,2,3])

module.exports = assertArraysEqual;