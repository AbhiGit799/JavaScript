// Find Even Numbers from Array - JavaScript 
let arr = [1,2,3,4,5,6];
let result = arr.filter(num=>num%2===0);
console.log(result);

let result1 = [];
for(let i of arr)
{
    if(i%2===0)
    {
        result1.push(i);
    }
}

console.log(result1);

