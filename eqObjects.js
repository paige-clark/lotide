// COMPARE TWO ARRAYS FOR EXACT MATCH
const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// COMPARE TWO OBJECTS FOR AN EXACT MATCH
const eqObjects = (objOne, objTwo) => {
  const keyArrayOne = Object.keys(objOne);
  const keyArrayTwo = Object.keys(objTwo);

  if (keyArrayOne.length === keyArrayTwo.length) {
    for (let key of keyArrayOne) {
      if (objOne[key] !== objTwo[key]) {
        if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
          if (!eqArrays(objOne[key], objTwo[key])) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

// ASSERT EQUALS FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;

/*
INPUT: Two objects
- primitive checks
  * compare if they have the same number of keys
  * compare if the value for each key is the same for both objects
- array checks
  *
OUTPUT: True if the objects math, false if they don't
*/