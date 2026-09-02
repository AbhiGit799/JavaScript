/* 

A callback function is simply a function passed as an argument into another function, 
meant to be executed ("called back") at a later time.

Instead of a function deciding what to do with data internally, it lets you pass in the logic from the outside.

Why Use Callbacks?
=================== 
Reusability: Write the core algorithm once (e.g., iterating an array), and change behavior simply by passing a different callback.
Asynchronous Execution: Allows long-running tasks (like fetching data from a database or server) to run in the background without freezing the entire application.

Real-Time & Practical Use Cases
================================
Category                            Real-World Use Case                                   Example Code Pattern
User Events,               Triggering code when a button is clicked,                     button.addEventListener('click', () => { alert('Clicked!'); });"
Timers / Delays,           Delaying execution or creating repeating tasks,               setTimeout(() => console.log('Time up!'), 1000);"
API Data Fetching,         Handling network responses asynchronously,                    fetch(url).then(response => response.json());
Array Iteration,           "Processing, filtering, or modifying datasets",               users.forEach(user => sendEmail(user));

*/


// Pass individual arguments (Matches rest parameter syntax) If abc is meant to take comma-separated arguments:

function abc(operation,...args){
return args.map((arg)=>operation(arg));
}

console.log(abc((a)=>a*5,...[1,2,3,4,5])) 
//  In JavaScript, multiplying an array by a number converts the array to a string first ("1,2,3,4,5"), resulting in NaN

console.log(abc((a)=>a+10,1,2))


// Example 1: Creating Your Own Math Processor
// Imagine you want a generic function that takes two numbers and applies any operation to them:
console.log("\n");

function abmath(a,b,operation){
    return operation(a,b);
}
console.log(abmath(5,10,(x,y)=>x+y))   


function customFilter(arr,callfilter){
    const result = [];

    for(let i=0;i<arr.length;i++){
        if(callfilter(arr[i],i)){
            result.push(arr[i])
        }
    }
    return result;
}

const numbers = [1,2,3,4,5]

console.log(customFilter(numbers,(n)=>n>2))






