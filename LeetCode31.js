/*
In the Two Sum problem, the word complement simply means the number you still 
need to reach the target when you already have one number from the array.

For each element nums[i]:
The complement = target - nums[i]
If you can find this complement somewhere else in the array, then together they add up to the target.

So in short:
👉 The complement is the missing piece that, when added to the current number, equals the target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

/*
  @param {number[]} nums
  @param {number} target
  @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([2,1,7,0],9));



