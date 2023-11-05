let text = 'We are the so-called "Vikings" from the north.'; //   \" inserts a " similarly \\ = \,  \' = ',
console.log(text);
console.log(text.length); //text.length is a property of strings

// String methods

// String slice() -- extracts a part of a string and returns the extracted  a new string.It takes 2 parameters: start and end (end not included).
// String substr() -- substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
// String replace() -- replaces a specified value with another value in a string.
// String replaceAll() -- replaces all occurrences of a specified value with another value in a string.
// String toUpperCase() -- converts a string to uppercase letters.
// String toLowerCase() -- converts a string to lowercase letters.
// String concat()-- joins two or more strings.
// String trim() -- removes whitespace from both sides of a string.
// String trimStart() -- removes whitespace from the beginning of a string.
// String trimEnd() -- removes whitespace from the end of a string.
// String padStart() -- pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
// String padEnd() -- pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
// String charAt() -- returns the character at a specified index (position) in a string.
// String charCodeAt() -- returns the Unicode of the character at the specified index in a string.
// String split() -- converts a string into an array of substrings.

let str = "Avinash Kumar";

// slice
console.log(str.slice(0,8));
// substr
console.log(str.substr(8,5));
// replace
console.log(str.replace("Kumar","Vatsa"));
// replaceAll
console.log(str.replaceAll("a","A"));
// toUpperCase
console.log(str.toUpperCase());
// toLowerCase
console.log(str.toLowerCase());
// padStart
console.log(str.padStart(18,"kumar "));
// padEnd
console.log(str.padEnd(18,"kumar "));
// split
console.log(str.split(" "));


