const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// TEST CODE
const test1 = [1,2,3,4];

console.log('Should PASS:');
assertArraysEqual(tail([5,6,7]), [6,7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail(test1), [ 2, 3, 4 ]);

console.log('Should FAIL:');
assertArraysEqual(tail(["Night", "Lighthouse", "Labs"]), ["Night", "Lighthouse", "Labs"]);
assertArraysEqual(tail(['3', 3]), ['3', 3]);