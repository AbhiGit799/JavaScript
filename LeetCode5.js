// Apply Transformation over each element in Array.

var map = function (arr, fn) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr[i] = fn(arr[i], i);
  }

  return tempArr;
};

const m = function (arr, fn) {
  let tempArr = [];

  arr.forEach(function (v, i) {
    tempArr[i] = fn(v, i);
  });

  return tempArr;
};

const p = function (arr, fn) {
  let tempArr = [];

  arr.forEach(function (v, i) {
    tempArr.push(fn(v, i));
  });

  return tempArr;
};

const a = map([10, 20, 30, 40], (n) => n + 2);
console.log(a);

function double(num, index) {
  return num * 2;
}
console.log(map([1, 2, 3], double));

const b = map([10, 20, 30, 40], (n) => n * 2);
console.log(b);

console.log("\n");

const c = m([10, 20, 30, 40], (n) => n - 2);
console.log(c);

const d = p([10, 20, 30, 40], (n) => n / 2);
console.log(d);



/* 🧩 Step-by-Step Explanation

fn: This is the callback function you pass into map. In your examples, it’s (n) => n+2 or (n) => n*2.

arr[i]: This is the current element of the array at index i.
For the first loop iteration, arr[0] = 10.

i: This is the index of the current element in the array.
For the first loop iteration, i = 0.

Putting it together:
fn(arr[i], i) means “call the function fn with two arguments: the current element and its index.”



🔎 What’s Happening Here
fn is a function passed in as an argument

When you call map([1,2,3], someFunction), the second argument (someFunction) is stored in fn.

So fn is just a placeholder name for “whatever function you gave me.”

📘 Example Walkthrough
=======================
function doubleWithIndex(value, index) {
  return value * 2 + index;
}

console.log(map([10, 20, 30], doubleWithIndex));

Step by step:
First loop: arr[0] = 10, i = 0  
→ fn(10, 0) → 10 * 2 + 0 = 20 → stored in tempArr[0].

Second loop: arr[1] = 20, i = 1  
→ fn(20, 1) → 20 * 2 + 1 = 41 → stored in tempArr[1].

Third loop: arr[2] = 30, i = 2  
→ fn(30, 2) → 30 * 2 + 2 = 62 → stored in tempArr[2].



*/
