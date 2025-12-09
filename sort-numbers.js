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
          // throwing an error back so user could provide correct order.
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
      let tempArray;


      // while loop, untill all numbers in an array starting from index 2 will be checked.
      while(count !== arrayLength){

        // internal count to follow which number, before currentNumber is checked.
        let internalCount = count - 1;
        currentNumber = this.myArray[count];
        // finaLength, so I could know how many numbers to crop from array.
        const finalLength = finalArrayAsc.length;

        // for loop until all numbers is checked or space between higher and smaller number is found.
        for(let i = 0; i < count; i++){

          // if finallArray last number is smaller than currentNumber, current number is pushed to finalArray.
          if(currentNumber >= finalArrayAsc[count - 1]){
            finalArrayAsc.push(currentNumber);
            break;
          }
          // if smaller numbers is not found, current number is added at the beginning of an array.
          else if(internalCount === 0){
            finalArrayAsc.unshift(currentNumber);
            break;
          }
          
          // If space between higher and smaller number is found, need to add current number in between.
          // All higher number we add to temp array (later it will be tail of finalArray).
          else if((currentNumber <= finalArrayAsc[internalCount]) && 
                  (currentNumber >= finalArrayAsc[internalCount-1])){
            tempArray = finalArrayAsc.splice(internalCount);

          // Removing tail with higher numbers from finalArray
          // and adding currentNumber at the enf of finalArray.
            for(let i = internalCount; i < finalLength; i++){
              finalArrayAsc.splice(i, 1);
            }

            finalArrayAsc.push(currentNumber);
          
          // returning tail for Final array.
            tempArray.forEach((num) => {
              finalArrayAsc.push(num);
            })
            break;
          }

          // if none of conditions were met, checking previous number in an array.
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

        // internal count = 0, since we will begin checking from first number in an array
        let internalCount = 0;
        let currentNumber = this.myArray[count];
        const finalLength = finalArrayDesc.length;
        let tempArray = [];
        for(let i = 0; i < count; i++){
          
          // if currentNumber is higher or eq compared to first number in an array, adding current number  at the beginning.
          if(currentNumber >= finalArrayDesc[0]){
            finalArrayDesc.unshift(currentNumber);
            break;
          }

          // if currentNumber in between higher and smaller numbers
          else if((currentNumber >= finalArrayDesc[internalCount]) && 
                  (currentNumber <= finalArrayDesc[internalCount-1])){
          
          // temp array is created to store higher numbers than current number
          // order is asc, so later when pushing to finall array, descending order would be provided
            for(let i = internalCount-1; i >= 0; i--){
              tempArray.push(finalArrayDesc[i]);
            }

          // finalArray modification, so only smaller numbers than currentNumber would stay
          // and shifting currentNumber at the beginning.
            finalArrayDesc = finalArrayDesc.splice(internalCount);
            finalArrayDesc.unshift(currentNumber);
          
          // adding head of higher number to finalArray
            tempArray.forEach((num) => {
              finalArrayDesc.unshift(num);
            })
            break;
          }

          // if all numbers are checked, currentNumbers goes to the end of finalArray.
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