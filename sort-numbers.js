import { CheckIsValid } from './check-validation.js';

"use strict";

export class SortNumbers{

    constructor(myArray){
      this.myArray = myArray;
      // create CheckIsValid object to check if provided array is valid.
      this.myArrayValid = new CheckIsValid(myArray);
    }

    #checkOrder(order){
      try{
        if(order.toLowerCase() === "asc"){
          return true;
        }
        else if(order.toLowerCase() === "desc"){
          return false;
        }
        else{
          throw new ReferenceError('Order must be ascending("asc"), or descending ("desc").')
        }
      }
      catch(ReferenceError){
          console.error(ReferenceError.name);
          console.error(ReferenceError.message);
          // throwing an error back, so user could provide correct order.
          throw ReferenceError;
      }
    }


    #arrayLengthIsTwo(order){

      const smallArray = []
      // if array length = 2, returning array depending on which order is picked.
      if(this.#checkOrder(order)){
        if (this.myArray[0] < this.myArray[1]){
          smallArray.push(this.myArray[0]);
          smallArray.push(this.myArray[1]);
          return smallArray;
        }
        else{
          smallArray.push(this.myArray[1]);
          smallArray.push(this.myArray[0]);
          return smallArray;
        }
      }
      else{
        if (this.myArray[0] < this.myArray[1]){
          smallArray.push(this.myArray[1]);
          smallArray.push(this.myArray[0]);
          return smallArray;
        }
        else{
          smallArray.push(this.myArray[0]);
          smallArray.push(this.myArray[1]);
          return smallArray;
        }
      }
    }

    #arrayLengthMoreThanTwoAsc(order){

      // initiating start array, from #arrayLengthIsTwo method.
      // since I know that array length is 2 starting count from 2.

      let finalArrayAsc = this.#arrayLengthIsTwo(order);
      const arrayLength = this.myArray.length;
      let count = 2;
      let currentNumber;

      // while loop, untill all numbers in an array starting from index 2 will be checked.
      while(count !== arrayLength){

        // internal count to follow which number is checked starting from finalArrayAsc last number.
        let internalCount = count - 1;
        currentNumber = this.myArray[count];

        // for loop until all numbers is checked or space between higher and smaller number is found.
        for(let i = 0; i < count; i++){

          // if finallArrayAsc last number is smaller than currentNumber, current number is pushed to finalArray.
          if(currentNumber >= finalArrayAsc[count - 1]){
            finalArrayAsc.push(currentNumber);
            break;
          }
          // if smaller numbers is not found, current number is added at the beginning of an array.
          else if(internalCount === 0){
            finalArrayAsc.unshift(currentNumber);
            break;
          }
          
          // If space between higher and smaller number is found, add current number in between.
          else if((currentNumber <= finalArrayAsc[internalCount]) && 
                  (currentNumber >= finalArrayAsc[internalCount-1])){
            // push currentNumber between smaller and higher numbers.
            finalArrayAsc.splice(internalCount, 0, currentNumber);
            break;
          }

          // if none of conditions were met, checking next number (index - 1) in an array.
          else{
            internalCount--;
          }
        }
        count++;
      }
      return finalArrayAsc;
    }

  #arrayLengthMoreThanTwoDesc(order){

      let finalArrayDesc = this.#arrayLengthIsTwo(order);
      const arrayLength = this.myArray.length;
      let count = 2;
      
      while(count !== arrayLength){

        // internal count = 0, since we will begin to check from first number in an array
        let internalCount = 0;
        let currentNumber = this.myArray[count];
        const finalLength = finalArrayDesc.length;

        for(let i = 0; i < count; i++){
          
          // if currentNumber is higher or eq compared to first number in an array, adding current number at the beginning.
          if(currentNumber >= finalArrayDesc[0]){
            finalArrayDesc.unshift(currentNumber);
            break;
          }

          // if currentNumber in between higher and smaller numbers, push it in between
          else if((currentNumber >= finalArrayDesc[internalCount]) && 
                  (currentNumber <= finalArrayDesc[internalCount-1])){
                    finalArrayDesc.splice(internalCount, 0, currentNumber);
            break;
          }

          // if all numbers are checked, currentNumber is pushed to the end of finalArrayDesc.
          else if((internalCount + 1) === finalLength){
            finalArrayDesc.push(currentNumber);
            break;
          }

          else{
            internalCount++;
          }
        }
        count++;
      }
      return finalArrayDesc;
    }

  sortNumbers(order){
    // if length of an array is 0 or 1, returning original array
    if(this.myArray.length === 0 || this.myArray.length === 1){
      return (this.myArray);
    }
    // if length of an array is 2, applying #arrayLengthIsTwo() method and returning newArray.
    else if(this.myArray.length === 2){
      return this.#arrayLengthIsTwo(order);
    }
    // if asc order is picked
    else if(order === "asc"){
      return this.#arrayLengthMoreThanTwoAsc(order);
    }
    // if descending order is picked
    else{
      return this.#arrayLengthMoreThanTwoDesc(order);
    }
  }
}