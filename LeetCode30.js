/* 

2721. Execute Asynchronous Functions in Parallel

LeetCode 2721: Execute Asynchronous Functions in Parallel is about running multiple async functions at the same time and 
collecting their results once all are finished. Let’s break it down beginner‑style.

🔹 Problem Summary
You’re asked to implement a function that:
Takes an array of asynchronous functions (functions that return Promises).
Runs them in parallel (not one after another).
Returns their results in the same order as the input.

🔹 Beginner Analogy
Imagine you have three friends:
Friend A is boiling water (takes 3 minutes).
Friend B is chopping vegetables (takes 2 minutes).
Friend C is setting the table (takes 1 minute).

If they work one after another, total time = 6 minutes.
If they work in parallel, total time = 3 minutes (the longest task decides).

That’s exactly what this problem is about.


🔹 Key Beginner Takeaways
Parallel execution = start all tasks together.
Promise.all in JavaScript does this automatically.
Order matters → results must match input order, not completion order.
Error handling → if one fails, the whole thing fails.


🔹 Real-World Uses
API calls → Fetch data from multiple endpoints at once.
File uploads → Upload several files together.
Batch processing → Run multiple computations simultaneously.



🧩 Beginner Takeaways
Always wrap async logic in a Promise if you want to use resolve/reject.
Parallel execution means all functions start at once.
Order preservation is key: results must match the order of input functions, not the order they finish.
Error handling: if any function rejects, the whole promiseAll rejects immediately.

*/

var promiseAll = function(functions) {
return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    functions.forEach((fn, i) => {
      fn()
        .then(res => {
          results[i] = res;          // store result in correct order
          completed++;
          if (completed === functions.length) {
            resolve(results);        // all done
          }
        })
        .catch(err => reject(err));  // if any fails, reject immediately
    });
  });
};


const fn1 = () => new Promise(res => setTimeout(() => res(1), 300));
const fn2 = () => new Promise(res => setTimeout(() => res(2), 200));
const fn3 = () => new Promise(res => setTimeout(() => res(3), 100));

promiseAll([fn1, fn2, fn3]).then(console.log);

/* 

All three start together.
fn3 finishes first, fn2 next, fn1 last.
Results are collected in input order → [1, 2, 3].


*/








