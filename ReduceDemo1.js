


const numbers =[1,-1,2,3];

// a=0, c=1=> a=1
// a=1, c=-1=> a=0
// a=0, c=2=> a=2
// a=2, c=3=> a=5

const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0)

console.log(sum); // 5

/*

reduce() takes 4 arguments 
1) Accumulator
2) Current Value
3) Current Index
4) Source Array

a) callback function b) Initial Value = 0

reduce() used with array.

*/











