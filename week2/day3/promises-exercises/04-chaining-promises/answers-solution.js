/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise.then(
      (data) => {
        resolve(asyncTransformer(data));
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((data) => {
    slowAsyncProcess(data);
  });
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    /* IMPLEMENT ME! */
    const resolveFunc = (user) => {
      if (!user) return undefined;
      return getOrganizationById(user.organizationId).then((organization) => {
        return { ...user, organization: organization };
      });
    };
    const rejectFunc = () => undefined;
    return getUserById(userId).then(resolveFunc, rejectFunc);
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
