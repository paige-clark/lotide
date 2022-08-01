// const assertEqual = require('./assertEqual');

// COMPARE TWO ARRAYS FOR EXACT MATCH
const eqArrays = (arrayOne, arrayTwo) => {
  // if they are not the same length, false
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  // if the index values don't match, false
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  // otherwise return true
  return true
};

module.exports = eqArrays;

/*IDEAS (ARCHIVE)
- Check the lengths of the arrays against eachother
- loop through each array and check each element against the other marybe?
OUTPUT: false or true
*/