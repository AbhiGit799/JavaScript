// Array Reduce Transformation.

var redu = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }

  return init;
};

a = redu([1, 2, 3, 4], (acc, curr) => acc + curr, 0);

console.log(a);
