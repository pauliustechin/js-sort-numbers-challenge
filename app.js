import { CheckIsValid } from './check-validation.js';
import { SortNumbers } from './sort-numbers.js';

"use strict";

const numArray = [1, 5, 3, 4, 9];
const num = 1;

const sortNums = new SortNumbers(numArray);

sortNums.sortSmall("desc");

console.log(numArray.splice(1,2));
