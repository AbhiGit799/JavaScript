/* 

283. Move Zeroes


Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?


*/

var moveZeroes = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
  }
  return nums;
};

let nums = [0, 1, 0, 3, 12];
console.log(nums.length);
console.log(moveZeroes(nums));

/* 

The key idea

The two pointers have different jobs:

right → finds non-zero elements
left  → tells us where to put them

And because we swap immediately, we don't need the second loop to put zeroes at the end.



*/

if (1 !== 0) {
  console.log("G");
}

// Important Note => Important: Two loops one after another are still O(n), not O(n²).

/* 

Space Complexity: O(1)

You only create:

let left = 0;
let i

No new array, object, or other data structure is created.

So:

✅ Space = O(1)

Because you modify the original nums array in-place.


Interview answer

Time complexity is O(n), because the array is traversed at most twice. 

Space complexity is O(1), because we modify the array in-place without using extra space.



*/

var moveZeroes1 = function (nums) {
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[left] = nums[i];
      left++;
    }
  }

  while (left < nums.length) {
    nums[left] = 0;
    left++;
  }

  return nums;
};

// This is a very common two-pointer pattern, where both pointers move in the same
// direction rather than one starting at each end.
