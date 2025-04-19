// how to create an Object

let obj1 = { name: "Adnan", age: 20 };
let obj2 = { name: "Aatif", age: 12 };

// access any value using a key
console.log(obj1["name"]);
console.log(obj2.name);

// Are Objects Mutable ?
// yes

obj1.name = "Addu"; // update object
console.log(obj1)

// how to add a new property to an already created object
obj1.marks = 70;  // if mark key is present it will update it, otherwise, it adds it
obj1["company"] = "Google";

console.log(obj1);

// delete a key value pair ?
// we can use delete operator along with object.keys?

delete obj1.age;

console.log(obj1);