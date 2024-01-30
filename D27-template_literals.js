// Template literals are enclosed by backtick (`) characters instead of double or single quotes.

// Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: ${expression}. The strings and placeholders get passed to a function — either a default function, or a function you supply. The default function (when you don't supply your own) just performs string interpolation to do substitution of the placeholders and then concatenate the parts into a single string.

function transformer(string, ...placeholders) {
  let res = "";
  console.log(string);
  for (let i = 0; i < placeholders.length; i++) {
    res += string[i] + " " + placeholders[i];
  }
  return res;
}

let [name, place] = ["Avinash", "Patna"];
let text1 = transformer`Hello my name is ${name} and i live at ${place}`;
let text2 = `Hello my name is ${name} and i live in ${place}`;

console.log(text2);
console.log(text1);
