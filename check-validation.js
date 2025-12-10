"use strict";

export class CheckIsValid{

    constructor(myArray){
      this.myArray = myArray;
      // validation check when initiating new instance of CheckIsValid class.
      this.#checkIsArray(this.myArray);
      this.#checkIsNumArray(this.myArray);
    }

    #checkIsArray(myArray){
      try{
        if(!(myArray instanceof Array)){
          throw new TypeError("You have to provide an Array.");
        } 
      }
      catch (TypeError){
        console.error(TypeError.name);
        console.error(TypeError.message);
        // throwing an error back, so user could provide an array.
        throw TypeError;
      }
    }

    #checkIsNumArray(myArray){

      try{
      myArray.forEach((num) => {
        // Math.floor(), to include doubles.
        if(!(Number.isInteger(Math.floor(num)))){
          throw new TypeError('Some values in an array is not a numbers!\nDepending on picked order strings will be placed at the beginning ("asc") or at the end ("desc").');
        }
      });
      }
      catch(TypeError){
        console.error(TypeError.name);
        console.error(TypeError.message); 
      }
    }
}