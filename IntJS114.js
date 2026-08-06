// move zeros to end without changing the array order in JS?

// ✅ Method 1: Using filter() and concat()

/* 

First filter() keeps non-zero elements.
Second filter() collects all zeros.
concat() joins them together.
Preserves order of non-zero elements.

*/

const arr = [1,2,3,5,6];
const ans = arr.filter(n=>n>3);
console.log(ans);

function moveZeros(arr)
{
    return arr.filter(num=>num!=0).concat(arr.filter(num => num === 0));
}

console.log(moveZeros([0,1,0,3,12]));

// ✅ Method 2: In-place with Two Pointers

function moveZ(arr) {
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

console.log(moveZ([0,1,0,3,12]));

/* 

Step-by-Step Dry Run
Let’s take the input:
arr = [0, 1, 0, 3, 12]

Initialization
index = 0 → This pointer tracks where the next non-zero should go.

Loop through array
i = 0 → arr[0] = 0

Zero found → skip.

index = 0 (unchanged).

i = 1 → arr[1] = 1

Non-zero → place at arr[index].

arr[0] = 1 → array becomes [1, 1, 0, 3, 12].

Increment index = 1.

i = 2 → arr[2] = 0

Zero found → skip.

index = 1.

i = 3 → arr[3] = 3

Non-zero → place at arr[index].

arr[1] = 3 → array becomes [1, 3, 0, 3, 12].

Increment index = 2.

i = 4 → arr[4] = 12

Non-zero → place at arr[index].

arr[2] = 12 → array becomes [1, 3, 12, 3, 12].

Increment index = 3.

Fill Remaining with Zeros
Now index = 3, array looks like [1, 3, 12, 3, 12].

Fill from index to end with zeros:

arr[3] = 0 → [1, 3, 12, 0, 12]

arr[4] = 0 → [1, 3, 12, 0, 0]

✅ Final Result
[1, 3, 12, 0, 0]

Non-zero elements keep their original order.

All zeros are moved to the end.

*/