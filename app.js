import { SortNumbers } from './sort-numbers.js';

"use strict";

const numArray = [2, 5, 3, 5, 2, 9, 8, 6];

const sortNums = new SortNumbers(numArray);

const newArrayAsc = sortNums.sortNumbers("asc");
const newArrayDesc = sortNums.sortNumbers("desc");

console.log("Array numbers in ascending order: [" + newArrayAsc + "]");
console.log("Array numbers in descending order: [" + newArrayDesc + "]");
