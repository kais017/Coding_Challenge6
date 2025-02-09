
// Task 1: Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold)
// creating a function that calculates our total profit
{ return ((sellingPrice - costPrice) * unitsSold) };
// this will give us the calculation in our output

console.log(`Total Profit: $${calculateProfit(20,30,100)}`)
// testing data
console.log(`Total Profit: $${calculateProfit(50,70,200)}`)
// Logging the test data

// Task 2: Function Expression

function calculateSalesTax(amount, taxRate)
// creating a function that calculates the amount of sales tax given purchase amount and tax rate
{ return (amount * taxRate)};
// gives us the output of amount times tax rate once logged

console.log(`Sales Tax: $${Math.floor(calculateSalesTax(100, 0.07))}`);
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`);
// Logging the test data given



