const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

// throw new Error('ooooops');

returnPromise('one', 1000)
  .then((data) => {
    console.log('one:', data);
    return returnRejectedPromise('two', 1000);
  })
  .catch((err) => {
    // throw err;
    console.log('different err:', err);
    return returnRejectedPromise(42, 1000);
  })
  .then((data) => {
    console.log('justaftercatch', data);
    return returnRejectedPromise('three', 1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('four', 1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('five', 1000);
  })
  .then((data) => {
    console.log(data);
    return returnPromise('six', 1000);
  })
  .catch((err) => {
    // throw err;
    console.log('err:', err);
  });
