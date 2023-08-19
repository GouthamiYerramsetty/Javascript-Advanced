/* Problem:
You have an array of objects representing products in an online store.
 Each object has the properties name, price, and category. Your task is to 
 calculate the total price of products in a specific category, sort the 
 products by price in ascending order, and apply a discount of 10% to products in a certain price range. 
 
 const products = [
  { name: 'Product 1', price: 50, category: 'Electronics' },
  { name: 'Product 2', price: 25, category: 'Clothing' },
  { name: 'Product 3', price: 80, category: 'Electronics' },
  { name: 'Product 4', price: 40, category: 'Clothing' },
  { name: 'Product 5', price: 100, category: 'Electronics' }
];

Your Task:

Use the filter method to extract products in a specific category.
Use the map method to calculate the total price of products in that category.
Use the sort method to sort the products by price in ascending order.
Use the spread (...) operator to create a copy of the products array with an additional property for discounted products.
Use the rest (...) operator to update the prices of discounted products by applying a 10% discount.

*/


const products = [
    { name: 'Product 1', price: 50, category: 'Electronics' },
    { name: 'Product 2', price: 25, category: 'Clothing' },
    { name: 'Product 3', price: 80, category: 'Electronics' },
    { name: 'Product 4', price: 40, category: 'Clothing' },
    { name: 'Product 5', price: 100, category: 'Electronics' }
  ];
  
  // Step 1: Use filter to extract products in a specific category
  const categoryToFilter = 'Electronics';
  const filteredProducts = products.filter(product => product.category === categoryToFilter);
  
  // Step 2: Use map to calculate the total price of products in that category
  const totalPrice = filteredProducts.map(product => product.price).reduce((total, price) => total + price, 0);
  
  // Step 3: Use sort to sort the products by price in ascending order
  const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
  
  // Step 4: Use spread operator to create a copy of the products array with additional properties
  const productsWithDiscount = sortedProducts.map(product => ({ ...product, discounted: false }));
  
  // Step 5: Use rest operator to apply a 10% discount to certain products
  const discountedProducts = productsWithDiscount.map(product => {
    if (product.price >= 50 && product.price <= 80) {
      return { ...product, price: product.price * 0.9, discounted: true };
    }
    return product;
  });
  
  console.log('Total Price:', totalPrice);
  console.log('Discounted Products:', discountedProducts);
  