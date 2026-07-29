// Remove duplicate elements from give array using single loop

let arr = [1,2,3,2,4,1,5,1]

let obj = {};

let unique = [];

//Keys cannot be duplicate

// for(let i=0;i<arr.length;i++)
// {
//   obj[arr[i]] = true
// }

// console.log(obj);

for(let i=0;i<arr.length;i++)
{
    if(!obj[arr[i]])
    {
      obj[arr[i]] = true
      unique.push(arr[i])
    }
}

console.log(unique);