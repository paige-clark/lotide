const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');         // tested and done
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');     // tested and done
const tail = require('./tail');         // tested and done
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,                                 // tested and done
  letterPositions,
  map,
  middle,                               // tested and done
  tail,                                 // tested and done
  takeUntil,
  without
};

/* NOTES
? should there be some kind of notation saying what does what?
*/