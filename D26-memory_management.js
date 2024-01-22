// In js data is stored in two types of memory i.e. stack and heap memory.

// There are majorly two types of data type sin js Primitive and non-primitive
// primitive - number,string,boolean,null,undefined etc.
// non-primitive - arrays, objects, functions

// So, js allocates memory in stack to primitive data types and heap memory is allocated to non-primitive ones.
// stack memory follows the CALL BY VALUE principle while heap memory follows CALL BY REFRENCE principle

// eg.

let myVar1 = 5;
let myVar2 = myVar1;
myVar2 = 1;
console.log(myVar1, myVar2); // Here the original value isn't changed as the value is copied

let myArr1 = [1, 2, 3, 4];
let myArr2 = myArr1;

myArr2[0] = 10;
console.log(myArr1, myArr2);            // Here the orignial array is also change as instead of copying the reference is passed
