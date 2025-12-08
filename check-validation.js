"use strict";

export class CheckIsValid{

    constructor(myArray){
      this.myArray = myArray;
    }

    #checkIsArray(){

      if(this.myArray instanceof Array){
        return true;
      } 
      else{
        throw new Error("You have to provide an Array")
      }
    }


    #checkIsNumArray(){

      const isNumArray = true;

      if(this.#checkIsArray()){
        this.myArray.forEach((num) => {
          // Math.floor(), to include doubles.
          if(Number.isInteger(Math.floor(num))){
          }
          else{
            throw new Error("All values in an Array must be numbers.");
          }
        });
      }
      return isNumArray;
    }

    isValid(){
      this.#checkIsNumArray();
    }
}