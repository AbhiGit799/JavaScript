/*

2621. Sleep
============

🛌 What the Problem Asks
You need to write a function sleep(millis) that pauses execution for a given number of milliseconds, then continues.
JavaScript doesn’t have a built-in sleep like Python, so we build it using Promises and setTimeout.

🧠 Why This Is Useful
Simulates delays (like waiting for an API).
Helps test asynchronous code.
Teaches how Promises and async/await work together.


🧩 Step-by-Step Explanation
=============================
new Promise(...) → Creates an envelope that will be opened later.
setTimeout(resolve, millis) → Waits millis milliseconds, then calls resolve().
When resolve() runs, the promise is fulfilled, meaning the “pause” is over.
Because the function is async, you can use await sleep(...) to actually pause code.



📊 Related Promise Methods You’ll See
=======================================
resolve → instantly fulfill a promise.
reject → instantly fail a promise.
then → run code after success.
catch → run code after error.
finally → always run cleanup.

================================================================================================================================================

🧩 Step 1: Context
====================
This line is inside a Promise:
new Promise((resolve) => {
    setTimeout(resolve, millis);
});

resolve is a function automatically provided by the Promise constructor.
Calling resolve(value) tells the Promise: “I’m done, here’s the result.”
In this case, we don’t pass a value, we just signal completion after waiting.

🧩 Step 2: Dry Run Example
===========================
Let’s say we call:
sleep(1000);


Execution Flow:
================
sleep(1000) → creates a new Promise.
Inside the Promise, JavaScript sets up a timer:
setTimeout(resolve, 1000) → wait 1000 ms, then call resolve().
For 1 second, the Promise is pending.
After 1 second, resolve() runs → Promise becomes fulfilled.
Any code waiting with await sleep(1000) or .then(...) continues.


So in short:
============
resolve is the success callback given by the Promise.
setTimeout(resolve, millis) means “after millis ms, mark the Promise as done.”


*/

async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}

async function demo() {
  console.log("Start");
  await sleep(1000);
  console.log("End after 1 second");
}

demo();




