// COUNT ONLY FUNCTION
const countOnly = (itemCollection, itemsToCount) => {
  let result = {};
  for (const item of itemCollection) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

// TESTING:

// ASSERT EQUAL FUNCTION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

/*NOTES
INPUT: intake and array and an object
- iterate through the array
- check if array value is true or false in object
- if it's false or not counted in the inputted array don't count it
- if it's true and it's in the array add it to the output object
- return object
OUTPUT: return an abject containing the counts of everything that the input listed
*/