// call method:
// The call method is used to invoke a function with a specified this value and individual arguments.
// It takes the function's context as the first argument, followed by the function's parameters.
// doesnot work with arrow function

let myObj = {
  name: "Avinash Kumar",
  age: "20",
  greet: function () {
    // console.log("hello", this.name);
    return "Hello " + this.name;
  },
};

console.log(myObj.greet());

let otherObj = {
  name: "Rahul",
  age: "21",
};

console.log(myObj.greet.call(otherObj));

let myFun = function (money) {
  console.log("my name is ", this.name, "and i have ", money, " rupee");
};

myFun.call(otherObj, 50000);

// function.prototype.applly()
// same as call but in this the arguments are passed as an array, there can be max  only two arguments the first is the this reference and the 2nd will be the lsit of arguments as an array

// function.prototype.bind()
// bind returns a new function with the same function body but with a different this value

let newFun = myFun.bind(myObj, 50000); // Here we are binding the this reference of MYObj to the newFun function
newFun();
