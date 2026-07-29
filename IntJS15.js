// #8 Move All Zeros to End of Array | JavaScrip

// ✅ Method 1: Using filter() and concat()

function moveZeros(arr)
{
    return arr.filter(num=>num!==0).concat(arr.filter(num=>num===0))
}

console.log(moveZeros([0,1,0,3,12]));


// ✅ Method 2: In-place with Two Pointers

function moveZeros2(arr) {
  let index = 0;
  
  // Move non-zero elements forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index++] = arr[i];
    }
  }
  
  // Fill remaining positions with zeros
  while (index < arr.length) {
    arr[index++] = 0;
  }
  
  return arr;
}

console.log(moveZeros2([0, 1, 0, 31, 17])); 
// Output: [1, 3, 12, 0, 0]

