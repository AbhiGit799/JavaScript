let arr = [1,2,2,3,1]

let result = [...new Set(arr)]

console.log(result); // [ 1, 2, 3 ]

let unique = [];

for(let i of arr)
{
   if(!unique.includes(i))
   {
    unique.push(i)
   }
}

console.log(unique);

// O(n) complexity

let seen = {}
let unique1 = [];

for(let i of arr)
{
   if(!seen[i])
   {
      seen[i] = true;
      unique1.push(i);
   }
}

console.log(unique1);
