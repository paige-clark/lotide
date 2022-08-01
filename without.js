// REMOVES AN ARRAY OF ITEMS FROM A SOURCE ARRAY AND RETURNS A NEW ARRAY
const without = (sourceArray, itemsToRemove) => {
  let result = [];
  for (let item of sourceArray) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

module.exports = without;

// console.log(without([4, 5, 6, 5, 9, 10], [4, '5']));