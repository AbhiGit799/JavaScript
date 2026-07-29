// #14 JavaScript Array Tricks Every Developer Must Know #javascriptinterview #shorts

let numArray = [3,6,8];

[a,b,c] = numArray;

// above syntax is short of 
// let a = numArry[0]
// let b = numArry[1]
// let c = numArry[2]

console.log(a,b,c);

let n1 = [10,20,90]
let n2 = [40,50,90]

let num1 = n1.concat(n2) //Combine
console.log(num1);

let num2 = [...n1,...n2];
console.log(num2);

// To remove duplicates
let num3 = [...new Set([...n1,...n2])];

console.log(num3);



