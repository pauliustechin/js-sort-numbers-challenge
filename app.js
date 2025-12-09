import { SortNumbers } from './sort-numbers.js';

"use strict";

// let numArray = [2, 5, 8.7, 5, 2, 9, 8, 6, 12, 10, 5.5, 7 ];
let numArray = [2, 5, 8.7, 5, 2, 9, "test", 6, 12, 10, 5.5, 7 ];
// let numArray = 5;
// let numArray = [];
// let numArray = [5];
// let numArray = [2, 8];


let newArray;
// imitatint wrong value
let value = "ascc";

try{
  const sortedNumsObj = new SortNumbers(numArray);
  newArray = sortedNumsObj.sortNumbers(value);
}
catch(e){
  // if i catch returned error from #checkIsArray(myArray) imitating correct array, provided by user.
  if(e instanceof TypeError){
    numArray = [2, 5, 8.7, 5, 2, 9, 6, 12, 10, 7 ];
    const sortedNumsObj = new SortNumbers(numArray);
    // try to sort array, if picked order is not correct, imitating correct order.
    try{
      newArray = sortedNumsObj.sortNumbers(value);
    }
    catch(e2){
      console.log('Please provide order correctly (ascending - "asc", descending - "desc").');
      if(e2 instanceof ReferenceError){
        // imitating correct order.
        value = "asc";
        newArray = sortedNumsObj.sortNumbers(value);
      }
    }
  }
  // if no TypeError, but ReferenceError, imitating correct order.
  else if(e instanceof ReferenceError){
    console.log('Please provide order correctly (ascending - "asc", descending - "desc").');
    const sortedNumsObj = new SortNumbers(numArray);
    // imitating correct order.
    value = "asc";
    newArray = sortedNumsObj.sortNumbers(value);
  }
}


if(value === "asc"){
  console.log("Array numbers in ascending order: [" + newArray + "]");
}
else{
  console.log("Array numbers in descending order: [" + newArray + "]");
}

