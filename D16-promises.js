// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) resolve({ name: "Avinash" });
    else reject({ message: "Something went wrong" });
  }, 5000);
});

promise
  .then((user) => {
    console.log("Hello " + user.name);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => console.log("Promise Fullfilled"));

// Promise methods
// promise.all() -- The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
// promise.allSettled() -- The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
// promise.race() -- takes an iterable of promises and return the first promise which is setteled
// promise.any() -- takes an array of promise returns the first promise that is fullfilled, if all promises are rejected it returns the array with rejection reasons.
// promise.allSettled()-- takes an array of promises and returns an array of object of each promise with status of promise and value.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2");
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3");
  }, 4000);
});

// promise.all()
let res1 = Promise.all([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});
// promise.race()
let res2 = Promise.race([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});

// promise.any()
let res3 = Promise.any([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});

// promise.allSettled()
let res4 = Promise.allSettled([promise1, promise2, promise3]).then((data) => {
  console.log(data);
});