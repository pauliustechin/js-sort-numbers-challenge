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

    #arrayLengthMoreThanTwoAsc(){

      // kadangi zinau, kad array length > 2, pradedu counta nuo 2.
      let finalArrayAsc = this.#arrayLengthIsTwo("asc");
      const arrayLength = this.myArray.length;
      let count = 2;
      
      let currentNumber;
      let tempArray;


      // sukti while loop, kol bus praeiti visi array skaiciai.
      while(count !== arrayLength){

        // susikuriau internal count, kad galeciau tikrinti, kuris skaicius surikiuotos array tikrinamas.
        let internalCount = count - 1;
        currentNumber = this.myArray[count];
        // final length, kad zinoti kiek skaiciu isimti is atnaujintos array.
        const finalLength = finalArrayAsc.length;

        // leidziam for loop per atnaujinta array.
        for(let i = 0; i < count; i++){

          // paskutinis newArray skaicius mazesnis, uz tikrinama skaiciu, skaiciu is kart pridedam i pabaiga.
          if(currentNumber >= finalArrayAsc[count - 1]){
            finalArrayAsc.push(currentNumber);
            break;
          }
          // jei praeina visas ciklas ir neatsiranda nei vienas mazesnis skaicius, tikrinama skaiciu dedam i prieki.
          else if(internalCount === 0){
            // tempArray = [];
            finalArrayAsc.unshift(currentNumber);
            break;
          }
          
          // jei paskutinis tikrintas skaicius didesnis uz currentNumber, o ankstesnis eileje didesnis,
          // nupjaunam visus didesnius skaicius i tempArray (uodega veliau pridesim prie final array)
          else if((currentNumber <= finalArrayAsc[internalCount]) && 
                  (currentNumber >= finalArrayAsc[internalCount-1])){
            tempArray = finalArrayAsc.splice(internalCount);

          // istrinam visa uodega > skaicius didesnius uz current number,
          // o current number pushinam i paskutine vieta.
            for(let i = internalCount; i < finalLength; i++){
              finalArrayAsc.splice(i, 1);
            }

            finalArrayAsc.push(currentNumber);
          
          // prie modifikuoto final array pridedam uodega.
            tempArray.forEach((num) => {
              finalArrayAsc.push(num);
            })
            break;
          }

          // jei netenkina nei vienos salygos, internal count minusuojam ir ziurim i ankstesni skaiciu masyve.
          else{
            internalCount--;
          }
        }
        count++;
      }
      return finalArrayAsc;
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
      else{
        this.#arrayLengthMoreThanTwoAsc();
      }
    }
}