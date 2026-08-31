// Debounce

/* 
The LeetCode “Debounce” problem (#2627) in JavaScript asks you to implement a debounced version of a function — meaning the function execution is delayed by t milliseconds and cancelled if called again within that window. The key is to use setTimeout and clearTimeout to manage calls.


📊 Why Use Debounce?
Search inputs → avoid sending too many requests.

Resize events → only run layout code once user stops resizing.

Button clicks → prevent accidental double submissions.

🧩 Step-by-Step Explanation
fn → This is the original function you passed into debounce.
Example: logMessage or searchAPI.

...args → This is the rest/spread operator. It collects all arguments passed into the debounced function and spreads them back out when calling fn.
So if you call debouncedLog("Hello", 123), then args = ["Hello", 123].

Putting it together:  
fn(...args) means “call the original function fn with all the arguments that were passed into the debounced wrapper.”



*/

function debounce(fn,t)
{
    let timeoutId;

    return function(...args)
    {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    }
}

function logMessage(msg) {
  console.log("You typed:", msg);
}

const debouncedLog = debounce(logMessage, 5000);

// Simulate typing quickly
debouncedLog("H");
debouncedLog("He");
debouncedLog("Hel");
debouncedLog("Hell");
debouncedLog("Hello");





