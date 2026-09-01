/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
       return "Hello World";
    }
};

console.log(createHelloWorld()());

console.log(createHelloWorld([])());


// Step 1: Call the outer function to get the inner function
const f = createHelloWorld();


// Step 2: Call the returned inner function
console.log(f()); // Output: "Hello World"

// Any arguments passed to f() are ignored:
console.log(f(1, 2, 3)); // Output: "Hello World"
console.log(f("test"));   // Output: "Hello World"









