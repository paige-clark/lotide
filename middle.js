// FUNCTION THAT RETURNS MIDDLE VALUES OF AN ARRAY
const middle = (array) => {
  let returnArray = [];
  //if the array is even
  if (array.length % 2 === 0 && array.length > 2) {
    const evenMiddle = array.length / 2;
    returnArray.push(array[evenMiddle - 1], array[evenMiddle]);
  }
  //if the array is odd
  if (array.length % 2 !== 0 && array.length > 1) {
    const oddMiddle = Math.floor(array.length / 2);
    returnArray.push(array[oddMiddle]);
  }
  return returnArray;
};

module.exports = middle;

/* NOTES (archive)
INPUT: an array
- first check the length of the array and see if it's even or odd
  + maybe use modulo or see if I can find a new function to check if is even or is odd

- if the array length is EVEN you must return the middle two numbers
- if the array length is ODD you must return the middle one number
  + google to see if there's a good way to do this, otherwise this can likely be
    solved with looping
  + I'm guessing the number should be divided by two and you take the entry at that
    index, just not sure about the even situation

OUTPUT: a new array that just contains the middle numbers of an inputted array
*/