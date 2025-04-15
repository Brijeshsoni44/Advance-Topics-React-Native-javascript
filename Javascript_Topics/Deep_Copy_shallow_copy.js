// Shallow Copy vs Deep Copy in JavaScript
// ✅ Shallow Copy
// A shallow copy means the first level of the object/array is copied, but nested objects/arrays are still referenced.

// 📌 Example:
// js
// Copy
// Edit
// const original = { name: "Guru", address: { city: "Delhi" } };
// const shallow = { ...original }; // or Object.assign({}, original)

// shallow.name = "Saurabh";           // Only affects shallow
// shallow.address.city = "Noida";     // Affects both

// console.log(original.address.city); // Output: "Noida"
// 🔸 Even though shallow is a new object, the address object inside is still referenced (not copied).

// ✅ Deep Copy
// A deep copy copies all levels of the object — even nested objects are cloned completely.

// 📌 Example:
// js
// Copy
// Edit
// const original = { name: "Guru", address: { city: "Delhi" } };
// const deep = JSON.parse(JSON.stringify(original));

// deep.name = "Saurabh";             // Only affects deep
// deep.address.city = "Noida";       // Only affects deep

// console.log(original.address.city); // Output: "Delhi"
// 🔸 Deep copy creates a true clone, and modifying deep will not affect original.

// ✅ Summary Table:
// Feature	Shallow Copy	Deep Copy
// Copy Level	First level	All levels (nested too)
// Nested Reference	Shared (points to same object)	Independent copy
// Common Methods	Object.assign(), spread ...	JSON.parse(JSON.stringify(...)), structuredClone()
// Performance	Faster	Slightly slower due to recursion
// Mutation Safe?	❌ Not fully	✅ Safe
// 🔥 10 Complex Input-Output Based Questions on Copying
// ⚡️ Question 1: Shallow Copy of Nested Object
// js
// Copy
// Edit
// const obj = { a: 1, b: { c: 2 } };
// const copy = { ...obj };
// copy.b.c = 5;
// console.log(obj.b.c);
// Output: 5
// → Because b is still referenced.

// ⚡️ Question 2: Deep Copy using JSON
// js
// Copy
// Edit
// const obj = { a: 1, b: { c: 2 } };
// const copy = JSON.parse(JSON.stringify(obj));
// copy.b.c = 99;
// console.log(obj.b.c);
// Output: 2
// → Deep copy breaks the reference.

// ⚡️ Question 3: Limitations of JSON Copy
// js
// Copy
// Edit
// const obj = { date: new Date() };
// const copy = JSON.parse(JSON.stringify(obj));
// console.log(typeof copy.date);
// Output: "string"
// → Dates become strings — JSON doesn't preserve types like Date, Map, Set.

// ⚡️ Question 4: Function in Object
// js
// Copy
// Edit
// const obj = {
//   a: 1,
//   fn: () => console.log("Hello"),
// };
// const copy = JSON.parse(JSON.stringify(obj));
// console.log(copy.fn);
// Output: undefined
// → Functions are not copied with JSON method.

// ⚡️ Question 5: Spread Operator on Array of Objects
// js
// Copy
// Edit
// const arr = [{ x: 1 }, { y: 2 }];
// const shallow = [...arr];
// shallow[0].x = 9;
// console.log(arr[0].x);
// Output: 9
// → Shallow copy, inner objects are referenced.

// ⚡️ Question 6: Structured Clone API (Modern Deep Copy)
// js
// Copy
// Edit
// const obj = { a: 1, b: { c: 2 } };
// const deep = structuredClone(obj);
// deep.b.c = 10;
// console.log(obj.b.c);
// Output: 2
// → Deep copy using modern structuredClone().

// ⚡️ Question 7: Nested Mutation After Shallow Copy
// js
// Copy
// Edit
// const obj = { a: 1, nested: { b: 2 } };
// const copy = Object.assign({}, obj);
// copy.nested.b = 100;
// console.log(obj.nested.b);
// Output: 100
// → Because nested was not deeply cloned.

// ⚡️ Question 8: JSON Deep Copy with Circular Reference
// js
// Copy
// Edit
// const obj = {};
// obj.self = obj;
// const copy = JSON.parse(JSON.stringify(obj));
// Output: Error: Converting circular structure to JSON
// → JSON method cannot handle circular references.

// ⚡️ Question 9: Changing Top-Level After Shallow Copy
// js
// Copy
// Edit
// const obj = { name: "Guru" };
// const copy = { ...obj };
// copy.name = "Saurabh";
// console.log(obj.name);
// Output: "Guru"
// → Top-level is copied by value (primitive).

// ⚡️ Question 10: Array Deep Copy
// js
// Copy
// Edit
// const arr = [[1, 2], [3, 4]];
// const shallow = [...arr];
// shallow[0][0] = 100;
// console.log(arr[0][0]);
// Output: 100
// → Because inner arrays are still referenced (shallow copy).