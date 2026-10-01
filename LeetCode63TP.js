/* 

*/

var threeSum = function (nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate fixed values
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate left values
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        // Skip duplicate right values
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([-1,0,1,2,-1,-4]));


/* 

Easy way to remember

Since we need 3 numbers, leave room for 2 numbers after i.

i        left    right
↓         ↓       ↓
[number] [number] [number]


*/


/*

Therefore:

continue;

means:

Skip this iteration and move to the next i.

We don't process the second -1 as the starting number because we already processed -1 at i = 1.




*/