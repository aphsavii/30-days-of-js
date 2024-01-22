// The spread and rest operators both are the same but used for the different purposes the spread operator is used to conver the array into individual arguments while the the rest operator works quite the opposite. The rest ooperator converts individual arguments into an array.

const myVar = [1, 2, 3, 4, 5];

function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sum(...myVar));

