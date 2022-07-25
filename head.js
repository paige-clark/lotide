// ARRAY INDEX 0 GRABBER
const head = (inputtedArray) => {
  return inputtedArray[0];
};

/*
TESTING
// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Night", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['3', 3]), 3);
*/