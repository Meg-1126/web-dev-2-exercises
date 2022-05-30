/*
Given the following data, implement a function calculateSalesTax that calculates the total sales and total tax, grouped by company.

Hints
Break down the problem into step-by-step pseudo-code (try pen and paper sketching, thinking "top-down" vs "bottom-up", pairing--whatever feels right to you!), and use console.log statements to debug and check your assumptions.

Don't be afraid to write additional functions if it helps you reason about your code! Sometimes even a very simple function like calculateTax(sales, taxRate) (calculating tax on a single dollar amount with a known rate) can help by giving the operation a name. What other small operations would partially solve this problem?

Naming your variables clearly and descriptively will help avoid confusion.

If you try to access an object attribute (property) that does not exist, then it will return undefined. This is important to know - if you are encountering undefined issues you may be falsely assuming that an attribute exists. Remember undefined is a "falsey" value.

*/

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
    // Implement your code here
    const obj = {};
    const Telus = {};
    const Bombardier = {};
    //Sum up sales of BC and SK
    let salesTelus = calculateSalesBC(companySalesData[0].sales) + calculateSalesSK(companySalesData[2].sales);
    //Sum up tax of BC and SK
    let taxTelus = calculateTaxBC(salesTaxRates.BC) + calculateTaxSK(salesTaxRates.SK);
    Telus.totalSales = salesTelus;
    Telus.totalTax = taxTelus;
    Bombardier.totalSales = calculateSalesAB(companySalesData[1].sales);
    Bombardier.totalTax = calculateTaxAB(salesTaxRates.AB);
    obj = Telus;
    console.log(obj);
    return obj;
}

const calculateSalesBC = function(salesArrBC) {
    let sumOfSalesBC = 0;
    salesArrBC.forEach(function(salesBC){
      sumOfSalesBC += salesBC;
    })
    return sumOfSalesBC;
}
const calculateTaxBC = function(taxRateBC) {
   let totalTaxBC = calculateSalesBC(companySalesData[0].sales)*taxRateBC;
   return totalTaxBC;
}

const calculateSalesAB = function(salesArrAB) {
  let sumOfSalesAB = 0;
  salesArrAB.forEach(function(salesAB){
    sumOfSalesAB += salesAB;
  })
  return sumOfSalesAB;
}
const calculateTaxAB = function(taxRateAB) {
  let totalTaxAB = calculateSalesBC(companySalesData[1].sales)*taxRateAB;
  return totalTaxAB;
}

const calculateSalesSK = function(salesArrSK) {
  let sumOfSalesSK = 0;
  salesArrSK.forEach(function(salesSK){
    sumOfSalesSK += salesSK;
  })
  return sumOfSalesSK;
}
const calculateTaxSK = function(taxRateSK) {
  let totalTaxSK = calculateSalesSK(companySalesData[2].sales)*taxRateSK;
  return totalTaxSK;
}

// console.log(calculateSalesBC(companySalesData[0].sales));
// console.log(calculateSalesAB(companySalesData[1].sales));
// console.log(calculateSalesSK(companySalesData[2].sales));
// console.log(calculateTaxBC(salesTaxRates.BC));
console.log(calculateSalesTax(companySalesData, salesTaxRates));