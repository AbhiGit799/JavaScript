/* 
2715. Timeout Cancellation

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, 
it should cancel the delayed execution of fn. Otherwise, 
if cancelFn is not invoked within the specified delay t, 
fn should be executed with the provided args as arguments.


===========================================================================================================================

Alright, let’s unpack LeetCode 2715: Timeout Cancellation step by step. 
This problem is about creating a function that lets you cancel a timeout before it finishes — 
something you’ll often need in real-world apps (like stopping a loading spinner if data arrives early).


🧩 Problem Statement
=====================
You need to implement a function cancellable(fn, args, t) that:
Calls fn(...args) after t milliseconds.
Returns a cancel function that, when called, cancels the timeout so fn never runs.


*/

function cancellable(fn, args, t) {
    // Schedule fn to run after t ms
    const timer = setTimeout(() => fn(...args), t);

    // Return a cancel function
    return () => clearTimeout(timer);
}

function sayHello(name) {
    console.log("Hello " + name);
}
const cancel = cancellable(sayHello, ["Arjun"], 3000);


// ✅ Example with Cancel
const cancel1 = cancellable(console.log, ["Task executed"], 2000);
setTimeout(cancel1, 1000); // cancel after 1 second

const c = cancellable(console.log,["Task Test"],5000);
c(); // cancel immediately

/* 

🧩 Step-by-Step Execution
===========================

1) Call cancellable(...)

Inside, setTimeout(() => console.log("Task Test"), 5000) schedules a task to run after 5000 ms.
A cancel function () => clearTimeout(timer) is returned.
That cancel function is stored in c.

2) Immediately call c()
This runs clearTimeout(timer) right away.
The scheduled task is cancelled before it ever has a chance to run.
At 5000 ms

3) Normally, "Task Test" would print.
But since you cancelled instantly, nothing happens.

✅ Output
=============
👉 No output at all.  
Because you cancelled the timeout right after creating it.

So in short:
=============
c is the cancel function returned by cancellable.
Calling c() immediately cancels the timeout, so "Task Test" never prints.


*/




// So the key idea:
// 👉 cancel() is not predefined — it’s the function returned by cancellable, and you assign it to a variable when you call cancellable.


//===================================================================

/* 
🛠 Key Functions Used
=======================
setTimeout → schedules a function to run later.
clearTimeout → cancels a scheduled timeout.

📊 Real-World Use Cases
==========================
Cancel API retries if data arrives early.
Stop animations when a user navigates away.
Prevent duplicate actions (like double-clicking a button).

*/









