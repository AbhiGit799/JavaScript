//Check if Array is Sorted - JavaScript Interview Question #dsa #interview #coding

// let arr = [1,2,3,4]

// let isSorted = arr.every((v,i)=>i===0 || v>=arr[i-1])

// console.log(isSorted);


//Manual way
let arr = [1,4,2,3]
let isSorted = true;

for(let i=1;i<arr.length;i++)
{
    if(arr[i]<arr[i-1])
    {
        isSorted=false;
        break;
    }
}

console.log(isSorted);







