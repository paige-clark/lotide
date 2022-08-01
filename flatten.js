/*
NOTES:
We would like to be able to intake an array that contains items
and nested arrays (one level down, ie. no nested in nested arrays)
and output them all as one array.

- intake array
- create an empty array that will hold our new array
- iterate through the inputted array
- if the array item is an array, loop through it and push its values to
  the empty array
- otherwise, push the array values to the empty array
- return the empty array, now filled

OUTPUT: an array that combines all the elements of an array and its
sub arrays
*/

const flatten = (inputArray) => {
  let combinedArray = [];
  for (let item of inputArray) { // loop through the inputted array
    if (Array.isArray(item)) { // if the array item is an array
      for (let subItem of item) {
        combinedArray.push(subItem);
      }
    } else { // if the array item is not an array
      combinedArray.push(item);
    }
  }
  return combinedArray;
};



const array = ['egg', 'cheese', 'tofu', ['steak', 'beefs']];
console.log(flatten(array));
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;