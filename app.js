import { SortNumbers } from './sort-numbers.js';

"use strict";

const numArray = [2, 5, 3.3, 5, 2, 9, 8.7, 6, ];

const sortedArray = new SortNumbers(numArray);

const newArrayAsc = sortedArray.sortNumbers("asc");
const newArrayDesc = sortedArray.sortNumbers("desc");

console.log("Array numbers in ascending order: [" + newArrayAsc + "]");
console.log("Array numbers in descending order: [" + newArrayDesc + "]");
