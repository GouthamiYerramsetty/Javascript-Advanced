/* https://onecompiler.com/javascript/3x56c9n36
https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/

----------------------------------------------------------------------------------
Apply all concepts  - Spread operator, rest operator, High order function 
map(), reduce(), filter(), and sort()
----------------------------------------------------------------------------------
*/

// Array of strings

let mobiles = ["iPhone", "Samsung", "Pixel"];






// Array of numbers
const numbers = [1, 2, 3, 4];

   /*
     Difference between forEach and map - 
      - 'forEach' will not return anything , it's job is to iterate the array and return anything ('undefined')
      - 'map' method returns a new Array, and it's used to transform the input array according to the needs and requirements  
   */

    const eachOperationJustPrinting = numbers.forEach(num => console.log("eachOperationJustPrinting",num))

    const eachOperation = numbers.forEach(num => {
        return num
    })
      console.log("eachOperation",eachOperation);

    const mapOperation_1 = numbers.map(num => num * 5)
      console.log("mapOperation_1",mapOperation_1);

    const mapOperation_2 = numbers.map(num => {
        return num *2
    })  
      console.log("mapOperation_2",mapOperation_2);



// array with mixed data types
const newData = ['work', 'exercise', 1, true];

