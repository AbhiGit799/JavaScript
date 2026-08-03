const nums = [1,2,4]

nums[6] = 7;

console.log(nums[6]); //7

nums[8] = 6

console.log(nums); // [ 1, 2, 4, <3 empty items>, 7, <1 empty item>, 6 ]

console.log(nums[4]);  // undefined






