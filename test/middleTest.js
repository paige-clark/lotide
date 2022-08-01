const assert = require('chai').assert;
const middle = require('../middle');

//TESTING
describe(`#middle`, () => {

  it (`returns [2, 3] when given [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it (`returns ['quail egg'] when given ['chicken egg', 'quail egg', 'turkey giblets']`, () => {
    assert.deepEqual(middle(['chicken egg', 'quail egg', 'turkey giblets']), ['quail egg']);
  });
  it (`returns [] when given [1]`, () => {
    assert.deepEqual(middle([1]), []);
  });

});

// // OLD TESTING:
// console.log('Should PASS:');
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 8, 9]), [3, 4]);
// assertArraysEqual(middle(['chicken egg', 'quail egg', 'turkey giblets']), [ 'quail egg' ]);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 4]), []);

// console.log('Should FAIL:');
// assertArraysEqual(middle([1, 2, 3, 4, 8, 9]), [4]);