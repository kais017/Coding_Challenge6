
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
// used math.floor to round decimal down to a whole value
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`);
// Logging the test data given

// Task 3: Arrow Function

// Task 4: 


// Task 5: Returning Values

function convertCurrency(amount, exchangeRate)
// creating a gunction that calculates currency exchanges
{ return amount * exchangeRate }
// gives us the output of the new currency rate

console.log(`Converted Amount: $${Math.floor(convertCurrency(100, 1.1))}`);
// used math floor to round decimal down to a whole value
console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`);
// logged the test data

