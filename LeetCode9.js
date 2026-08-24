
// Sleep

/* 
🛌 What the problem is asking
You need to implement a function sleep(millis) that pauses execution for a given number of milliseconds, then continues.
In JavaScript, we don’t have a built-in sleep like in Python, so we use Promises and setTimeout.


🧠 Why this is useful
It helps simulate delays (like waiting for an API call).

Useful in testing asynchronous code.

Teaches you how Promises and async/await work together.


*/

async function sleep(millis)
{
    return new Promise((fn)=>{
        setTimeout(fn,millis)
    })
}


async function demo() {
    console.log("Start");
    await sleep(4000);   // waits 1 second
    console.log("End after 4 second");
}

demo();













