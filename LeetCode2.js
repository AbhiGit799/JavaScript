// Counter

const createCounter = (n) => {
  return () => n++;
};

const counter = createCounter(10);

console.log(counter()); //10
console.log(counter()); //11
console.log(counter()); //12
console.log(counter()); //13
console.log(counter()); //14

console.log("\n");

console.log(createCounter(12)()); //12
console.log(createCounter(12)()); //12

/* 

What does it return?
createCounter(n) returns a function.
That function, when invoked, returns the current value of n and increments it.
So it’s essentially a stateful counter generator.


1) Outer function (createCounter)
Takes an initial number n.
Returns an inner function.

2) Inner function (()=>n++)
Each time you call it, it returns the current value of n.
Then increments n by 1 (postfix increment).
Because of closure, the inner function “remembers” the variable n 
from its outer scope, even after createCounter has finished running.

⚡ Key takeaway:
This is a classic closure pattern — the returned function keeps track of n across calls. 
It’s often used to build counters, generators, or encapsulated state without exposing variables globally.


*/
