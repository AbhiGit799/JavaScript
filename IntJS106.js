
const arr = [1,2,3,4,5,6]

const result = {even:[],odd:[]}

for(let n of arr)
{
    n%2===0?result.even.push(n):result.odd.push(n);
}


console.log(result);




