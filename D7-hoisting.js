// Hoisting is the process of moving the function declaration to the top of the file if not initilized the value is undefined and if initialized the value is assigned to the variable  


hello();
function hello() {
  console.log("Hello World"); // here the function is called before it is declared but still it works because of hoisting
}

// hello1();            // Cannot access 'hello' before initialization
const hello1 = function () {
  console.log("Hello World"); // here the function will not be called because it is initialized with const keyword and hence it is not hoisted
};

// hello2();           // Cannot access 'hello2' before initialization
let hello2 = function () {
  console.log("Hello World"); // here the function will not be called because it is initialized with let keyword and hence it is not hoisted
};
