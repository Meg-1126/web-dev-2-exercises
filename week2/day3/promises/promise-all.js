const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promiseOne = returnPromise('one', 1500); //api call
const promiseTwo = returnPromise('two', 4000); // get data from server db
const promiseThree = returnRejectedPromise('three', 2000); // load data
const promiseFour = returnPromise('four', 3000);

const promises = [promiseOne, promiseThree, promiseFour, promiseTwo];

Promise.all(promises)
  .then((data) => {
    console.log('data:', data);
  })
  .catch((err) => {
    console.log('something was rejected!:', err);
  });
