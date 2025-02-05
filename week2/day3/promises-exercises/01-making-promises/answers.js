/**
 *
 * EXERCISE 1
 *
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3() {
  /* IMPLEMENT ME! */
  const promise = new Promise(function(resolve, reject){
    resolve(3);
  });
  return promise;
}

/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
  /* IMPLEMENT ME! */
  const promise = new Promise(function(resolve, reject){
    reject("Boo!");
  });
  return promise; 
}

/**
 *
 * EXERCISE 3
 *
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    /* If itShouldResolve is true, call resolve */
    if (itShouldResolve === true) {
      resolve();
      /* If itShouldResolve is false, call reject */
    } else if (itShouldResolve === false) {
      reject();
    }
  });
}

/**
 *
 * EXERCISE 4
 *
 * @param {any} value
 * @param {number} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs) {
  /* Return a promise that resolves with the value after delayInMs */
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve(value);
    }, delayInMs);
  });
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
