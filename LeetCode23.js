/*
  @param {Promise} promise1
  @param {Promise} promise2
  @return {Promise}

🧩 Step 1: What’s a Promise?
===============================
Think of a Promise like a sealed envelope that says:
“I’ll give you a value later, not right now.”
Right now, the envelope is empty.
Later, someone puts a number inside.
You can’t use the number until the envelope is opened.
So a Promise is just a way for JavaScript to handle things that take time (like waiting for a server, or a timer).

🧩 Step 2: The Problem
========================
You’re given two envelopes (Promises), each will eventually contain a number.
Your job: add those two numbers together once both envelopes are opened.


🧩 Step 3: How it Works
=========================
Promise.all([promise1, promise2]) → waits until both promises are ready.
await → opens the envelopes and gives you the actual numbers.
Then you just add them.

🧩 Step 4: Example
====================
Promise.resolve(2) → an envelope that already has 2 inside.
Promise.resolve(5) → envelope with 5.
After waiting, we add them → 7.


🧠 Why This Matters
===================
This teaches you:
How to wait for multiple promises at once.
How to use async/await to make code look simple.

A real-world skill: combining results from multiple async tasks (like fetching data from two APIs).


 */


var addTwoPromises = async function(promise1, promise2) {
    const [val1,val2] = await Promise.all([promise1,promise2]);
    return val1+val2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
.then(result => console.log(result));









