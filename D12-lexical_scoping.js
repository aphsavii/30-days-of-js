// Lexical Scoping: A function that is lexically within another function gets access to the scope of the outer function.

function myName() {
  let name = "Avinash Kumar";

  function print() {
    console.log("My name is", name);
  }
  print();
}
myName();
