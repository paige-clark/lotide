const assertArraysEqual = require('./assertArraysEqual');

// GRAB EVERYTHING BUT INDEX[0] IN AN ARRAY
const tail = (inputtedArray) => {
  return inputtedArray.slice(1);
};

// EXAMPLE INPUT: tail([5,6,7] > [6,7]

module.exports = tail;