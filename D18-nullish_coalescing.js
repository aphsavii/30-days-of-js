// ES2020 introduced the nullish coalescing operator denoted by the double question marks (??). The nullish coalescing operator is a logical operator that accepts two values:
// The nullish coalescing operator returns the second value (value2) if the first value (value2) is null or undefined. Technically, the nullish coalescing operator is equivalent to the following block:

let result = null;
if (result === null || result === undefined) {
  result = "John";
}
console.log(result);

const name = null ?? "John";
console.log(name);

let obj = {
  name: "John",
  age: 20,
  address: {
    city: "New York",
    country: "USA",
  },
};

const hobby = obj.hobby ?? "cricket";
console.log(hobby);
