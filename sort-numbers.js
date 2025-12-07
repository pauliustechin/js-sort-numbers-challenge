import { CheckIsValid } from './check-validation.js';

"use strict";

export class SortNumbers{

    constructor(myArray){
      this.myArray = myArray;
      this.myArrayValid = new CheckIsValid(myArray);
    }

    #checkOrder(order){
      if(order.toLowerCase() === "asc"){
        return true;
      }
      else if(order.toLowerCase() === "desc"){
        return false;
      }
      else{
        throw new Error('Order must be ascending("asc"), or descending ("desc").')
      }
    }

    #arrayLengthIsTwo(order){

      const smallArray = []
      // jei array tik is dvieju skaiciu, pagal pasirinktą order įdedu reikšmes ir grąžinu.
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



    sortSmall(order){

      let newArray = [];

      // jei array length 0 arba 1, tiesiog grazinu array.
      if(this.myArrayValid.checkLength() === 0){
        console.log(this.myArray);
        // return this.myArray;
      }

      else if(this.myArrayValid.checkLength() === 2){
        newArray = this.#arrayLengthIsTwo(order);
        console.log(newArray);
      }
    }
}