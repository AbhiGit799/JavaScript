/* 
2650. Design Cancellable Function

Sometimes you have a long running task, and you may wish to cancel it before it completes. 
To help with this goal, write a function cancellable that accepts a generator object and returns an array of two values: a cancel function and a promise.

You may assume the generator function will only yield promises. 
It is your function's responsibility to pass the values resolved by the promise back to the generator. 
If the promise rejects, your function should throw that error back to the generator.

If the cancel callback is called before the generator is done, your function should throw an error back to the generator. 
That error should be the string "Cancelled" (Not an Error object). If the error was caught, 
the returned promise should resolve with the next value that was yielded or returned. Otherwise, 
the promise should reject with the thrown error. No more code should be executed.

When the generator is done, the promise your function returned should resolve the value the generator returned. 
If, however, the generator throws an error, the returned promise should reject with the error.

An example of how your code would be used:

function* tasks() {
  const val = yield new Promise(resolve => resolve(2 + 2));
  yield new Promise(resolve => setTimeout(resolve, 100));
  return val + 1; // calculation shouldn't be done.
}
const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.catch(console.log); // logs "Cancelled" at t=50ms
If instead cancel() was not called or was called after t=100ms, the promise would have resolved 5.

 

Example 1:

Input: 
generatorFunction = function*() { 
  return 42; 
}
cancelledAt = 100
Output: {"resolved": 42}
Explanation:
const generator = generatorFunction();
const [cancel, promise] = cancellable(generator);
setTimeout(cancel, 100);
promise.then(console.log); // resolves 42 at t=0ms

The generator immediately yields 42 and finishes. 
Because of that, the returned promise immediately resolves 42. Note that cancelling a finished generator does nothing.


*/

function cancellable(generator) {
  let cancelled = false; // flag to track cancellation

  const promise = new Promise((resolve, reject) => {
    function step(nextFn, arg) {
      let result;
      try {
        result = nextFn.call(generator, arg); // run generator step
      } catch (err) {
        reject(err); // if generator throws, stop
        return;
      }

      if (result.done) {
        resolve(result.value); // generator finished → resolve
        return;
      }

      // result.value is always a promise
      result.value.then(
        val => {
          if (cancelled) {
            // if cancelled, throw "Cancelled" into generator
            try {
              step(generator.throw, "Cancelled");
            } catch (err) {
              reject(err); // if not caught inside generator
            }
          } else {
            step(generator.next, val); // continue with resolved value
          }
        },
        err => {
          // if promise rejects, throw error into generator
          try {
            step(generator.throw, err);
          } catch (err2) {
            reject(err2);
          }
        }
      );
    }

    step(generator.next); // start generator
  });

  function cancel() {
    cancelled = true; // flip flag
  }

  return [cancel, promise];
}


function* tasks() {
  const val = yield Promise.resolve(4); // yields 4
  yield new Promise(r => setTimeout(r, 100)); // waits 100ms
  return val + 1; // returns 5
}

const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50); // cancel after 50ms

promise.catch(console.log); // "Cancelled"

