// Promise Chaining: Promise Chaining is a simple concept by which we may initialize another promise inside our .then() method and accordingly we may execute our results. The function inside then captures the value returned by the previous promise

// promise chaining means initiating a new promise inside the .then statement, multiple consecutive .then statements are used to resolve promises inside those .then statements.
// It is used when an asynchronous task is exprcting its input from an another asynchronous task and its output is also an input to other asynchronous task then multiple
// promises within mulltiple .then statements is used.

const promise = new Promise((resolve, reject) => {
  resolve("hello there! ");
});

let step2 = promise.then((data) => {
  return new Promise((resolve, reject) => {
    resolve(data + "Avinash ");
  });
});

let step3 = step2.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data + "how are you?");
    },3000);
  });
});

step4 = step3.then((data) => {
  console.log(data);
});
