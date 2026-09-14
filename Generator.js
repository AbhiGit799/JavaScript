/* 

A generator function in JavaScript is a special type of function that can pause execution and resume later, 
making it ideal for producing sequences of values one at a time instead of all at once. 
You define it with function* and use the yield keyword to return values step by step.

✅ Key Insight
===============
1) Use normal functions when you want a single result immediately.
2) Use generator functions when you want a sequence of results, produced one at a time, 
especially for large or infinite data streams.

Code Explanation
=================
Calling: When you call myGen(), it doesn’t run immediately. It returns a generator object.
Iteration: You use .next() to step through:
State Preservation: Each call resumes from where it last paused, keeping local variables intact.


📘 When to Use Generator Functions
===================================
Custom Iterators: Easily build sequences like Fibonacci, prime numbers, or ranges without precomputing everything.
Lazy Evaluation: Generate values only when needed, saving memory for large or infinite sequences.
Infinite Sequences: Useful for streams of data (e.g., IDs, timestamps).
Asynchronous Programming: With for await...of, generators can handle async tasks like reading files or fetching API data in chunks.
Complex Control Flow: They allow pausing/resuming execution, which can simplify scenarios like coroutines.

*/

function* myGen() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
