import { CheckIsValid } from './check-validation.js';
import { SortNumbers } from './sort-numbers.js';

"use strict";

const numArray = [2, 5, 3, 4, 3, 2, 2, 1, 3, 9, 8, 6];
const num = 1;

const sortNums = new SortNumbers(numArray);

sortNums.sortSmall("desc");
