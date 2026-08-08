let arr = [1,2,3,4]

let result = [...arr].reverse();

console.log(result);

let result1 = [];

for(let i=arr.length-1;i>=0;i--)
{
    result1.push(arr[i]);
}

console.log(result1)

// ✅ Method 1: Two-pointer swap (in-place reverse)

for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
  // swap arr[i] and arr[j]
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr);



