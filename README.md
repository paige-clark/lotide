# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @paigeclark/lotide`

**Require it:**

`const _ = require('@paigeclark/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares two arrays and checks to see if they match, logs a message.
* `assertEqual`: Comapres two values and checks to see if they match, logs a message.
* `assertObjectsEqual`: Comapres two objects and checks to see if they match, logs a message.
* `countLetters`: Intakes a string and returns an object counting how many times each letter appears.
* `countOnly`: Intakes an array and an object, returns an object containing the count for said items.
* `eqArrays`: Compares two arrays for an excact match and returns true or false.
* `eqObjects`: Compares two objects for an excact match and returns true or false.
* `findKey`: Check an object's using a callback and return the key of any value that matches.
* `findKeyByValue`: Intake an object and value, return the first key that contains the given value.
* `flatten`: Intake an array with ONE LEVEL of nested arrays, return this array all in one array.
* `head`: Intake an array and return the value at index 0.
* `letterPositions`: Intake a string, output an object containing keys for each letter and an array containing the index of each letter.
* `map`: Intake an array and a callback function, output each array alement modified according to the callback function.
* `middle`: Input an array, returns the middle values of an array.
* `tail`: Input an array, return an array with everything but the value at index 0.
* `takeUntil`: Input an array and a callback function, returns an array of values up until the terms of the callback function are no longer true.
* `without`: Input an array and an array of items to remove, returns a new array with those items removed.
