// Create Hello World Function

const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

console.log(createHelloWorld([]));
// To call the returned function
console.log(createHelloWorld([])());

console.log(createHelloWorld({}));
console.log(createHelloWorld({})());

console.log(createHelloWorld(null));
console.log(createHelloWorld(null)());

console.log(createHelloWorld([], {}, null));
console.log(createHelloWorld([], {}, null)());

/* 
This is a neat illustration of higher-order functions and closures in JavaScript.

Definition
==========
createHelloWorld is a function that returns another function.
The inner function accepts any arguments (...args) but ignores them and always returns "Hello World".

2) Calling createHelloWorld([])

Here you are calling createHelloWorld with [] as an argument.

But notice: createHelloWorld itself does not take parameters — it just returns the inner function.

So createHelloWorld([]) → returns the inner function.

That inner function is not invoked, so what gets logged is the function definition itself, not "Hello World".

Same logic applies for {}, null, and ([],{},null) — all those arguments are ignored because the outer function doesn’t use them.



*/
