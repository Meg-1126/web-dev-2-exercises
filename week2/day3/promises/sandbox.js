function payTheRent(rentAmount, accountBalance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rentAmount > accountBalance) {
        reject('Sorry, I got no money for you.');
      } else {
        resolve('Here is your money.');
      }
    }, 1000);
  });
}
console.log(' Landlord: Where is my money?');
console.log(
  'You: I promise I will pay you on the first day of the next month.'
);
const promise = payTheRent(5000, 500);
const promise2 = payTheRent(5000, 500000);
console.log('Landlord: Where is my money?');
console.log('Day 30 of the month', promise);
promise2
  .then((data) => {
    // console.log('resolved');
    console.log('Day 1 of the next month', promise);
    console.log(`You: ${data} `);
    console.log('Landlord: Thank you!');
    return data;
  })
  .catch((err) => {
    // console.log('catch', err);
    console.log('Day 1 of the next month', promise);
    console.log(`You: ${err}`);
    console.log('Landlord: No money, no house! Get out!');
  });
