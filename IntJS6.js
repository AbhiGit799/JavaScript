const x = [1, 2, 3];
const y = x;

y.push(4);

console.log(x); // [1,2,3,4]
console.log(y);

// y refers to x memory location
// array reference

// if you want to stop then
// const y = [...x]
// const y = Object.assign([],x)
// x.slice(0,3)

// First Way to Stop <============

// const x = [1,2,3]
// const y = [...x]

// y.push(4)

// console.log(x); // [1,2,3,4]
// console.log(y);

// Second way to stop <============

// const x = [1,2,3]
// const y = Object.assign([],x)

// y.push(4)

// console.log(x); // [1,2,3,4]
// console.log(y);

// Third Way <============
// const x = [1,2,3]
// const y = x.slice(0,3)

// y.push(4)

// console.log(x); // [1,2,3,4]
// console.log(y);
