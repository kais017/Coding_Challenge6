
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
const calculateBonus = (salary, performanceRating) => {
// creating an arrow function that calculates salary based on performance ratings
    if (performanceRating === "Excellent") {
        bonusRate = 0.2;
    } else if (performanceRating === "Good") { 
        bonusRate = 0.1; }
    else if (performanceRating === "Average") {
        bonusRate = 0.05; }
    
        return salary * bonusRate
    }
    // using if else to establish the conditions and apply each bonus rate to each performance rating

    console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`);
    console.log(`Bonus: $${calculateBonus(7000,"Good")}`);
// logging the test data
    
// Task 4: 

const calculateSubscriptionCost = (plan, months, discount = 0) =>
{    let subscriptionRate;
// creating a function that calculates the discount based on a monthly plan

if (plan === "Basic")
{ subscriptionRate = 10 ; }
else if (plan === "Premium")
    { subscriptionRate = 20 ; }
else if (plan = "Enterprise")
{ subscriptionRate = 50  ; }
else { return "Plan Unavailable"; }
// setting the conditions and pairing each plan to each monthly rate

let totalCost = subscriptionRate * months;
let discountCost = totalCost - discount;

return `${discountCost}`;
};

console.log(`Subscription 1 Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`);
console.log(`Subscription 2 Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`);
// logging each test value

// Task 5: Returning Values

function convertCurrency(amount, exchangeRate)
// creating a function that calculates currency exchanges
{ return amount * exchangeRate }
// gives us the output of the new currency rate

console.log(`Converted Amount: $${Math.floor(convertCurrency(100, 1.1))}`);
// used math floor to round decimal down to a whole value
console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`);
// logged the test data


// Task 6: Higher Order Functions

let orders = [200, 600, 1200, 450, 800];
// creating an array of ordes with order amounts

function applyBulkDiscount(orders, discountFunction)
// creating a function that calculates the discounted orders
{ return orders.map(discountFunction);}
// gives the output that applies the discount function to multiple orders

let discount9 = (orders, amount => amount > 500 ? amount * 0.9: amount); 
// if order numbers are above 500, the 10% discount is applied 

let discountedOrders = applyBulkDiscount(orders,discount9); 
// applies the discount to all orders above 500

console.log("Initial Orders:", orders);
console.log("Orders after bulk discount:", discountedOrders);
// logging the discounted orders

// Task 7: Closures

function createExpenseTracker()
{ let totalExpenses = 0;
     return function(expense)
    { totalExpenses += expense; 
        return `Total Expenses: $${totalExpenses}`;
    };
}
// creates the function for finding the total expenses by adding each amount to each other

let tracker = createExpenseTracker();
console.log("Total Expenses:", (tracker(200)));
console.log("Total Expenses:", (tracker(150)));
// logging the test data

// Task 8: Recursion in JavaScript

function calculateYearsToPromotion(employeeLevel)
// creating a function that calculates how many years until an employee reaches level 10 based on their current level
{ if (employeeLevel >= 10)  // employeeLevel must equal 10 or more 
   {  return 0; }
    let yearsUntil = 10 - employeeLevel;  // takes current level and subtracts it from 10 to find how many years until level 10 
    return yearsUntil * 2; // multiplies the remaining years and multiplies it by 2 because promotions happen every two years
}

console.log("Years to Level 10:", calculateYearsToPromotion(7));
console.log("Years to Level 10:", calculateYearsToPromotion(5));
// Logging the test data









