/*

2725. Interval Cancellation

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

 

LeetCode 2725: 
Interval Cancellation is about repeatedly executing a function at fixed intervals and then stopping it 
after a specified cancellation time. 
The function runs immediately, continues every t milliseconds, and halts when the cancel function is triggered.

🧩 Problem Statement
You need to implement a function cancellable(fn, args, t) that:

Calls fn(...args) immediately.

Calls it again every t milliseconds.

Returns a cancel function that stops the repeated execution when invoked.

This is achieved using setInterval for repetition and clearInterval for cancellation.


*/

/*
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function (fn, args, t) {
  fn(...args);
  const intervalId = setInterval(() => fn(...args), t);

  return function cancelFn() {
    clearInterval(intervalId);
  };
};

const m = (x) => console.log(x * 2);
const arr = [4];
const c = cancellable(m, arr, 3000);

c();

