// #19 JavaScript Interview Questions | Merge Objects Without Built-in Methods | Logical DSA

let obj1 = { a: 10, b: 20, c: 30, d: 40 };
let obj2 = { d: 40, e: 50, f: 60 };

let obj3 = {};
let count =0;

for (let item in obj1) {
  if (!(item in obj3)) {
    count++;
  }
  obj3[item] = obj1[item];
}

console.log(obj3);

for (let item in obj2) {
  if (!(item in obj3)) {
    count++;
  }
  obj3[item] = obj2[item];
}

console.log(obj3);
console.log(count);
