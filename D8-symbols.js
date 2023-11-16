// Symbols are a new primitive type introduced in ES6.
//  Symbols are immutable (cannot be changed) and are unique.   They are useful for identifying object properties.  They are also useful for creating private variables and methods in classes. Symbols are created using the Symbol() function.
//  Symbols are unique.  Even if you create two symbols with the same description, they are not equal to each other.  You can use the description to help identify the symbol, but it is not a unique identifier.  The description is only used for debugging purposes.
//  Symbols are immutable.  You cannot change the value of a symbol once it is created.  This is different from strings and numbers, which can be changed.  This means that symbols can be used as keys in objects, but strings and numbers cannot.

let sym1 = Symbol("hello");
let sym2 = Symbol("hello");

console.log(sym1 === sym2); //false
console.log(sym1 == sym2); //false
console.log(sym1); //Symbol(hello)

// Symbols as Object Properties
// Symbols can be used as property keys in objects.  This is useful for creating private properties and methods in classes.  Symbols are not included in the for...in loop, so they are not easily accessible from outside the object.  This makes them useful for private properties and methods.

let sym3 = Symbol("hello");
let sym4 = Symbol("hello");

let myObj = {
    [sym3]: "hello",
    [sym4]: "hello",
    };
console.log(myObj); //{Symbol(hello): "hello", Symbol(hello): "hello"}

console.log(myObj[sym3]); //hello

// Symbol methods 
// There are several methods that can be used with symbols.  These are listed below.

// Symbol.for() - This method creates a symbol if it does not already exist.  If it does exist, it returns the existing symbol.  This is useful for creating global symbols that can be accessed from anywhere in your code.    

let sym5 = Symbol.for("hello");
let sym6 = Symbol.for("hello");

console.log(sym5 === sym6); //true

// Symbol.keyFor() - This method returns the key for a symbol.  This is the description that was passed to the Symbol() function when the symbol was created.  This is useful for debugging purposes.

console.log(sym5);
console.log(Symbol.keyFor(sym5)); //hello

// Symbol.valueof() - This method returns the primitive value of a symbol.  This is the same as calling the Symbol() function with the symbol as an argument.

console.log(sym5.valueOf()); //Symbol(hello)

// Symbol.toString() - This method returns the string representation of a symbol.  This is the same as calling the Symbol() function with the symbol as an argument.

console.log(sym5.toString()); //Symbol(hello)

// Symbol.toSource() - This method returns the source code of a symbol.  This is the same as calling the Symbol() function with the symbol as an argument.

console.log(sym5.toSource()); //Symbol("hello")
