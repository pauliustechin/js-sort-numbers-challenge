import { SortNumbers } from './sort-numbers.js';

"use strict";

const numArray = [2, 5, 8.7, 5, 2, 9, 8, 6, 12, 10, 5.5, 7 ];
// const numArray = [2, 5, 8.7, 5, 2, 9, "test", 6, 12, 10, 5.5, 7 ];
// const numArray = 5;
// const numArray = [];
// const numArray = [5];
// const numArray = [2, 8];

const sortedArray = new SortNumbers(numArray);

const newArrayAsc = sortedArray.sortNumbers("asc");
const newArrayDesc = sortedArray.sortNumbers("desc");

console.log("Array numbers in ascending order: [" + newArrayAsc + "]");
console.log("Array numbers in descending order: [" + newArrayDesc + "]");
