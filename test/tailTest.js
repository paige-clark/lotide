const assert = require('chai').assert;
const tail = require('../tail');

// TESTING
describe(`#tail`, () => {

  it (`returns [6,7] when given [5,6,7]`, () => {
    assert.deepEqual(tail([5,6,7]), [6,7]);
  });
  it (`returns ["Lighthouse", "Labs"] when given ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it (`returns [] when given []`, () => {
    assert.deepEqual(tail([]), []);
  });
  
});