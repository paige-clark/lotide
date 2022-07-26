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
}

// ASSERT EQUALS TESTER
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(['eggs', 'cheese', 'milk'], ['eggs', 'cheese', 'milk']), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 8]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true); // => should FAIL

/*IDEAS
- Check the lengths of the arrays against eachother
- loop through each array and check each element against the other marybe?
OUTPUT: false or true
*/