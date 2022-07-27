/* NOTES:
 * INTAKE: Object, Value
 * - search the object
 * - return the first key which contains the given value
 * OUTPUT: return the first key which contains the given value
 * EDGE: if no key is given
 */

const findKeyByValue = (obj, value) => {
  const keyArray = Object.keys(obj);
  console.log(keyArray);
  for (let key of keyArray) {
    if (obj[key] === value) {
      return key;
    }
  };
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "Eggs"));

//TESTING
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);