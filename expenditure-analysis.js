/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If category already exists in the map, add the price to the existing total
    if (categoryMap[category]) {
      categoryMap[category] += price;
    } else {
      // If category doesn't exist, create a new entry with the price
      categoryMap[category] = price;
    }
  });

  // Convert the categoryMap object into an array of objects
  const totalSpentByCategory = Object.keys(categoryMap).map(category => ({
    [category]: categoryMap[category]
  }));

  return totalSpentByCategory;
}

// Example list of transactions
const transactions = [
  { itemName: "Item 1", category: "Groceries", price: 50, timestamp: 1640256000 },
  { itemName: "Item 2", category: "Utilities", price: 100, timestamp: 1640342400 },
  { itemName: "Item 3", category: "Groceries", price: 30, timestamp: 1640428800 },
  { itemName: "Item 4", category: "Entertainment", price: 80, timestamp: 1640515200 },
  { itemName: "Item 5", category: "Utilities", price: 50, timestamp: 1640601600 },
  { itemName: "Item 6", category: "Groceries", price: 40, timestamp: 1640688000 }
];

// Calculate total spent by category
const result = calculateTotalSpentByCategory(transactions);
console.log(result);


module.exports = calculateTotalSpentByCategory;
