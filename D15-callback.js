// Callback function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function greetingEng(name) {
  console.log("Hello " + name);
}

let arr = ["Avinash", "Rahul", "Rajnish", "Nishanta", "Shubhankar", "Sameer"];

arr.forEach(greetingEng);

arr.forEach((naam) => {
  console.log("hola como estas", naam);
});
