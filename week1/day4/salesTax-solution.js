const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: 'Telus',
    province: 'BC',
    sales: [100, 200, 400],
  },
  {
    name: 'Bombardier',
    province: 'AB',
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: 'Telus',
    province: 'SK',
    sales: [500, 100],
  },
];

const calculateSalesTax = function (salesData, taxRates) {
  // Implement your code here
  const result = {};
  salesData.forEach((salesInfo) => {
    // console.log(sales);
    let company = {};
    if (result[salesInfo.name]) {
      company = { ...result[salesInfo.name] };
    } else {
      company = {
        totalSales: 0,
        totalTax: 0,
      };
    }
    company.totalSales = salesInfo.sales.reduce((total, salesAmount) => {
      return total + salesAmount;
    }, company.totalSales);
    company.totalTax = company.totalSales * taxRates[salesInfo.province];

    result[salesInfo.name] = company;
  });
  return result;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));
/*
{
  Telus: {
    totalSales: value,
    totalTax: value
  },
  Bombardier: {
    totalSales: value,
    totalTax: value
  }
}
*/
