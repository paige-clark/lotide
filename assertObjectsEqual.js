// COMPARE TWO ARRAYS FOR EXACT MATCH
// ASSERT EQUAL OBJECTS USES THIS LEAVE IT
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

// ASSERT EQUAL OBJECTS
const assertObjectsEqual = (objOne, objTwo) => {
  const inspect = require('util').inspect;
  const keyArrayOne = Object.keys(objOne);
  const keyArrayTwo = Object.keys(objTwo);

  if (keyArrayOne.length === keyArrayTwo.length) {
    for (let key of keyArrayOne) {
      if (objOne[key] !== objTwo[key]) {
        if (Array.isArray(objOne[key]) && Array.isArray(objTwo[key])) {
          if (!eqArrays(objOne[key], objTwo[key])) {
            console.log(`🟥 Assertion Failed: ${inspect(objOne)} !== ${inspect(objTwo)}`);
            return false;
          }
        } else {
          console.log(`🟥 Assertion Failed: ${inspect(objOne)} !== ${inspect(objTwo)}`);
          return false;
        }
      }
    }
    console.log(`🟩 Assertion Passed: ${inspect(objOne)} === ${inspect(objTwo)}`);
    return true;
  }
  console.log(`🟥 Assertion Failed: ${inspect(objOne)} !== ${inspect(objTwo)}`);
  return false;
};

// TESTING:
// const testObject1 = {
//   egg1: [1],
//   egg2: [2, 5],
//   egg3: [5]
// };


// const testObject2 = {
//   egg1: [1],
//   egg2: [2, 4],
//   egg3: [5]
// };

// assertObjectsEqual(testObject1, testObject2)

//console.log(eqObjects(testObject1, testObject2));