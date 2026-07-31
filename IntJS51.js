let obj1 = {name:"Anil",address:{city:"Noida"}}
let obj2 = {age:34,address:{Country:"India"}}

// let obj3 = {...obj1,...obj2}
// console.log(obj3);
//{ name: 'Anil', address: { Country: 'India' }, age: 34 }


// Nested objects get override when we use spread operators.



// ⚡ Key takeaway
// Spread operator (...) = shallow merge (top-level only).

// For nested objects, you need manual merging or a deep merge utility.


// ✅ Proper ways to merge deeply

// Step 1: Manual merge  
// You can explicitly merge nested objects:

// let obj3 = {...obj1,...obj2,address:{...obj1.address,...obj2.address}};
// console.log(obj3);
//  name: 'Anil', address: { city: 'Noida', Country: 'India' }, age: 34 }


// Step 2: Using Object.assign

// let obj3 = Object.assign(
//     {}, obj1, obj2, {
//   address: Object.assign({}, obj1.address, obj2.address)
// });

// console.log(obj3);

// { name: 'Anil', address: { city: 'Noida', Country: 'India' }, age: 34 }


// Step 3
// Deep merge libraries  
// For complex cases, use libraries like Lodash (_.merge) which handle deeply nested merges automatically:
// npm install lodash

const _ = require("lodash")
let obj3 = _.merge(
            {},obj1,obj2)

console.log(obj3);

// { name: 'Anil', address: { city: 'Noida', Country: 'India' }, age: 34 }

