const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// // TEST CODE
// console.log('Should PASS:');
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(['eggs', 'cheese', 'milk'], ['eggs', 'cheese', 'milk']), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); // => should PASS

// console.log('Should FAIL:');
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 8]), true); // => should FAIL
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true); // => should FAIL