// Filter Elements from Array

const fit = function (arr, fn) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      temp.push(arr[i]);
    }
  }

  return temp;
};

arr = [0, 10, 20, 30, 40];

const a = fit(arr, (n) => n > 20);

console.log(a);
