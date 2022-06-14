/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
     promise
    .then((data)=>{
    resolve(transformer(data));
    })
    .catch((err)=>{
      reject(err);
    })
    });
  }

// * If the first promise resolves with a result, it calls the transformer with the value as an argument.
//   * If the transformer returns with a value, the new promise resolves with that value.
//   * If the transformer throws an error, the new promise rejects with that error.
/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  // return numberPromise
  //   .then((data) => {
  //     if (Number(data)){
  //       return data * data;
  //     } else if (data === ) {
  //       return parseInt(data) * parseInt(data);
  //     }
  //   }).catch((err)=> {
  //    if (err === NaN) {
  //     return "Cannot convert this data to a number!";
  //    } else {

  //    }
  //   });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(/* IMPLEMENT ME! */);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(/* IMPLEMENT ME */);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};