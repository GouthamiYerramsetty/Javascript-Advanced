/* Let's use an example array of objects and demonstrate different ways of defining the same
 object using both the spread  and rest operator. Consider the following array: */

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // Spread operator to add elements

console.log(newNumbers); // Output: [1, 2, 3, 4, 5]


const person = { name: 'Alice', age: 30, city: 'New York' };


 /* Defining a New Object with Spread Operator:

You can use the spread operator to create a new object by spreading the properties of the existing object and adding new properties. */

const newPersonWithSpread = { ...person, job: 'Engineer' };
console.log(newPersonWithSpread);


/* Defining a New Object with Modified Properties using Spread:

You can use the spread operator to create a new object with modified properties while keeping the rest of the properties intact. */

const modifiedPersonWithSpread = { ...person, age: 31 };
console.log(modifiedPersonWithSpread);

/* Combining Multiple Objects with Spread:

You can use the spread operator to combine multiple objects into a single object. */

const additionalInfo = { hobbies: ['Reading', 'Traveling'] };
const combinedPersonWithSpread = { ...person, ...additionalInfo };
console.log(combinedPersonWithSpread);

                 
/********************************Rest Operator ***********************************/

//Destructuring with Arrays:
const colors = ['red', 'green', 'blue'];
const [firstColor, ...remainingColors] = colors; // Rest operator in array destructuring

console.log(firstColor); // Output: 'red'
console.log(remainingColors); // Output: ['green', 'blue']


//Destructuring with Objects:
const personR = { name: 'Bob', age: 25, city: 'New York' };
const { name, ...restInfo } = personR; // Rest operator in object destructuring

console.log(name); // Output: 'Bob'
console.log(restInfo); // Output: { age: 25, city: 'New York' }
