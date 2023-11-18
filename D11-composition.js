//  composition is a way to combine multiple functions into a single function

function add(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

function composedFn(f1, f2) {
  // returning a composed function that takes the initial values of a and b to perform the operations
  return function composed(a, b) {
    return f2(f1(a, b));
  };
}

composed = composedFn(add, square);

console.log(composed(1, 2));
