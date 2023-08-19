/* You have a JSON object that represents information about a school. 
The object contains details about the school itself, as well as an array of student objects. Your task is to:

Use the filter method to extract students who are above a certain age.
Use the map method to create an array of student names.
Use the reduce method to calculate the average age of all students.
Use the sort method to sort the students by their ages in ascending order 

const school = {
    name: 'ABC School',
    location: 'Cityville',
    students: [
      { name: 'Alice', age: 18, grade: 'A' },
      { name: 'Bob', age: 20, grade: 'B' },
      { name: 'Carol', age: 19, grade: 'A' },
      { name: 'David', age: 22, grade: 'C' }
    ]
  };

 Your Task:

Use the filter method to extract students who are above 18 years old.
Use the map method to create an array of student names.
Use the reduce method to calculate the average age of all students.
Use the sort method to sort the students by their ages in ascending order. */

const school = {
    name: 'ABC School',
    location: 'Cityville',
    students: [
      { name: 'Alice', age: 18, grade: 'A' },
      { name: 'Bob', age: 20, grade: 'B' },
      { name: 'Carol', age: 19, grade: 'A' },
      { name: 'David', age: 22, grade: 'C' }
    ]
  };
  
  // Step 1: Use filter to extract students who are above 18 years old
  const adults = school.students.filter(student => student.age > 18);
  
  // Step 2: Use map to create an array of student names
  const studentNames = school.students.map(student => student.name);
  
  // Step 3: Use reduce to calculate the average age of all students
  const averageAge = school.students.reduce((total, student) => total + student.age, 0) / school.students.length;
  
  // Step 4: Use sort to sort the students by their ages in ascending order
  const studentsByAge = school.students.slice().sort((a, b) => a.age - b.age);
  
  console.log('Adult Students:', adults);
  console.log('Student Names:', studentNames);
  console.log('Average Age:', averageAge);
  console.log('Students by Age:', studentsByAge);
  
  