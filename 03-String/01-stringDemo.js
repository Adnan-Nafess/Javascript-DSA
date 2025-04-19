// How to create a String

let str = "hello";
let name = 'Adnan';
let empty = ""; // empty string

// How to Access Characters (Indexing)
// Zero-based indexing hoti hai (first character ka index = 0)

console.log(str[0]); // h
console.log(str[1]); // e
console.log(str[2]); // l

// How to Update Characters in String?
// Strings are immutable in JavaScript – directly update nahi kar sakte


str[0] = "y"; // ❌ won't change
console.log(str); // "hello"