const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TESTING:
console.log('Should PASS:');
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 8, 9]), [3, 4]);
assertArraysEqual(middle(['chicken egg', 'quail egg', 'turkey giblets']), [ 'quail egg' ]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 4]), []);

console.log('Should FAIL:');
assertArraysEqual(middle([1, 2, 3, 4, 8, 9]), [4]);