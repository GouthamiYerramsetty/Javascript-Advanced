/* Problem:
You have an array of objects representing books in a library. 
Each object has the properties title, author, and pages. Your task is to calculate the total 
number of pages for all the books, and then sort the books in descending order based on their page count. 

const books = [
  { title: 'Book 1', author: 'Author 1', pages: 200 },
  { title: 'Book 2', author: 'Author 2', pages: 350 },
  { title: 'Book 3', author: 'Author 3', pages: 120 },
  { title: 'Book 4', author: 'Author 4', pages: 500 }
];

Your Task:

Use the map method to extract an array of page counts from the books array.
Use the reduce method to calculate the total number of pages.
Use the sort method to sort the books array in descending order based on page count.
*/

const books = [
    { title: 'Book 1', author: 'Author 1', pages: 200 },
    { title: 'Book 2', author: 'Author 2', pages: 350 },
    { title: 'Book 3', author: 'Author 3', pages: 120 },
    { title: 'Book 4', author: 'Author 4', pages: 500 }
  ];
  
  // Step 1: Use map to extract an array of page counts
  const pageCounts = books.map(book => book.pages);
  
  // Step 2: Use reduce to calculate the total number of pages
  const totalPages = pageCounts.reduce((total, pageCount) => total + pageCount, 0);
  
  // Step 3: Use sort to sort the books array in descending order based on page count
  books.sort((a, b) => b.pages - a.pages);
  
  console.log('Total Pages:', totalPages);
  console.log('Books Sorted by Page Count:', books);
  