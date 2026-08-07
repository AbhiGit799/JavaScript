// Event Loop | Microtask vs Macrotask | JavaScript Interview Question #dsa #interview #coding

console.log("start");

setTimeout(()=>console.log("timeout"),0)

Promise.resolve().then(()=>console.log("Promise"))

console.log("End");

/* 
start
End
Promise
timeout
*/


/* 

In JavaScript, the event loop ensures that all synchronous code runs first, then drains the microtask queue 
(Promises, queueMicrotask, async/await continuations), and only after that executes one macrotask 
(like setTimeout, setInterval, I/O, or UI events). This is why a Promise.then always runs before a setTimeout(fn, 0).

🔎 Event Loop Basics
=====================
Single-threaded model: JavaScript runs on one thread with one call stack.

Queues: Asynchronous tasks are scheduled into two main queues:

Microtask queue → higher priority.

Macrotask queue → lower priority.


📌 Microtasks
===============
Examples: Promise.then, catch, finally, queueMicrotask, MutationObserver.
Executed immediately after the current synchronous code finishes, before any macrotask.
The entire microtask queue is drained before moving to the next macrotask.

⚠️ Danger: Recursive microtasks can block rendering and freeze the UI.

📌 Macrotasks
==============
Examples: setTimeout, setInterval, setImmediate (Node.js), I/O callbacks, UI events.
Executed one at a time per loop iteration, after all microtasks are cleared.
Even setTimeout(fn, 0) waits until microtasks finish.

*/