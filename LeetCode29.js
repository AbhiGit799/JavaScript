/*
2627. Debounce

Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is 
delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. 
The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.


🧩 Beginner-Friendly Explanation

🔹 What is Debounce?
=====================
Definition: A higher‑order function that delays execution of another function until after a pause.
Goal: Prevents a function from running too often during rapid events.
Analogy: Imagine a door closer — if you keep pushing the door before it shuts, the timer resets. 
Only when you stop pushing does the door finally close.


🔹 How It Works
================
User triggers an event (typing, scrolling, clicking).
Timer starts — function will run after t ms.
If another event happens before t ms ends, the timer resets.
Only the last event survives and executes the function.

🔹 Real-World Use Cases
=========================
Search inputs → Avoid flooding servers with API calls.
Window resize → Recalculate layout only after resizing stops.
Scroll events → Prevent excessive UI updates.
Button clicks → Stop accidental double submissions.

*/

var debounce = function (fn, t) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
};

 const log = debounce(console.log, 100);
 log('Hello'); // cancelled
 log('Hello'); // cancelled
 log('Hello'); // Logged at t=100ms


