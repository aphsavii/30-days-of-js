// A function is called a pure function if it follows some rules :-
// 1. For the same set of inputs the outpput is always same
// 2. It only uses variable and functions within it's current scope
// 3. It dosen't affect or modify external variables

// Ex. of pure function

function sum(a, b) {
  return a + b;                 // It will always return same output for same set of values and also dosent modify anthing outside as well as it
                                // only uses variable inside it's current scope
}


// Ex. of unpure function

function myFunc(a,b){                   // It dosen't follow any rule of pure function as it is using another function outside it's scope and it 
    sum(a+b);                           // will produce always a different ouput for same set of inputs    
    return sum+ Math.random();
}