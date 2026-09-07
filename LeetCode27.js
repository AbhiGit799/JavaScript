/* 
2637. Promise Time Limit

Given an asynchronous function fn and a time t in milliseconds, 
return a new time limited version of the input function. 

fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

🧩 The Idea in Plain Words
Imagine you order food delivery:

If the food arrives within 30 minutes, you’re happy.

If it takes longer than 30 minutes, you cancel and say “Too late!”.

That’s exactly what this problem does:

You have a function (fn) that might take time to finish.

You set a time limit (t).

If the function finishes before t, you get the result.

If not, you reject with "Time Limit Exceeded".

What’s happening:
=================

1) Promise.race → like a race between two runners.

Runner 1: your function (fn).

Runner 2: a timer that rejects after t ms.

2) Whoever finishes first decides the result.


🔑 Beginner Takeaway
======================
Promise.race is like a competition.

If your function finishes first → you get the result.

If the timeout finishes first → you get "Time Limit Exceeded".

This is useful when you don’t want to wait forever for something (like API calls).

*/


var timeLimit = function(fn, t) {
    return async function(...args) {
        // Race between fn and timeout
        return Promise.race([
            fn(...args), // the actual function
            new Promise((_, reject) =>
                setTimeout(() => reject("Time Limit Exceeded"), t)
            )
        ]);
    };
};

const fn = async (n) => {
  await new Promise(res => setTimeout(res, 100)); // takes 100ms
  return n * n;
};

const limited = timeLimit(fn, 50); // limit is 50ms

limited(5).then(console.log).catch(console.log);

/*

fn is a function that expects one input parameter called n.

Inside fn, it waits 100ms, then returns n * n.

When you call limited(5), you are passing the value 5 as n.

So fn(5) will try to return 25 after 100ms.

But because the time limit is 50ms, the timeout “wins the race” and rejects with "Time Limit Exceeded" before fn(5) finishes.

⚙️ Step‑by‑Step Flow
======================

You wrap fn with timeLimit(fn, 50).
Now limited is a new function that enforces the 50ms rule.

You call limited(5).
→ This means: run fn(5) but cancel if it takes longer than 50ms.

fn(5) starts running:

Waits 100ms.

Then returns 25.

Meanwhile, the timeout promise is set to reject after 50ms.

At 50ms, timeout fires first → "Time Limit Exceeded".

So the .catch(console.log) prints "Time Limit Exceeded".


🔑 Beginner Takeaway
The number 5 is just the input to your function fn.

Without it, fn wouldn’t know what to calculate (n * n).

You could pass any number:

limited(2) → would try to return 4 (but still fail if limit is too short).

limited(10) → would try to return 100.



Think of it like this:

fn is a calculator that squares a number.

limited is a calculator with a stopwatch.

You hand it 5 → it tries to calculate 25.

But if the stopwatch runs out before it finishes, you get "Time Limit Exceeded" instead.




*/

// Because the function needed 100ms but the limit was 50ms.












