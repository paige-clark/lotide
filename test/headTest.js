const assertEqual = require('../assertEqual')
const head = require('../head')

// TEST CODE
console.log('Should PASS:');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log('Should FAIL:');
assertEqual(head(["Night", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['3', 3]), 3);