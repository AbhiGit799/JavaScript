// Find Missing Number (1 to N) - JavaScript Interview Question #dsa #interview #coding


let arr = [1,2,4,5]

let n=5;

let expsum = n*(n+1)/2;

let actualsum = arr.reduce((a,b)=>a+b,0);

console.log(expsum-actualsum);











