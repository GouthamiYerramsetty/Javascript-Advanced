/* Problem:
You have an array of objects representing students in a class. 
Each object has the properties name, age, score, and grade. Your task is to:

Use the filter method to extract students who scored above a certain threshold.
Use the map method to create an array of student names.
Use the reduce method to calculate the average score of all students.
Use the sort method to sort the students by age in descending order.

Here's the initial array: 
const students = [
  { name: 'Alice', age: 20, score: 85, grade: 'A' },
  { name: 'Bob', age: 22, score: 70, grade: 'B' },
  { name: 'Carol', age: 21, score: 95, grade: 'A' },
  { name: 'David', age: 23, score: 60, grade: 'C' }
];

Your Task:

Use the filter method to extract students who scored above 80.
Use the map method to create an array of student names.
Use the reduce method to calculate the average score of all students.
Use the sort method to sort the students by age in descending order.


*/


const students = [
    { name: 'Alice', age: 20, score: 85, grade: 'A' },
    { name: 'Bob', age: 22, score: 70, grade: 'B' },
    { name: 'Carol', age: 21, score: 95, grade: 'A' },
    { name: 'David', age: 23, score: 60, grade: 'C' }
  ];
  
  // Step 1: Use filter to extract students who scored above 80
  const highScorers = students.filter(student => student.score > 80);
  
  // Step 2: Use map to create an array of student names
  const studentNames = students.map(student => student.name);
  
  // Step 3: Use reduce to calculate the average score of all students
  const averageScore = students.reduce((total, student) => total + student.score, 0) / students.length;
  
  // Step 4: Use sort to sort the students by age in descending order
  const studentsByAge = students.sort((a, b) => b.age - a.age);
  
  console.log('High Scorers:', highScorers);
  console.log('Student Names:', studentNames);
  console.log('Average Score:', averageScore);
  console.log('Students by Age:', studentsByAge);
  