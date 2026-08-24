
Array.prototype.last = function()
{
    return this.length ? this.at(-1) : -1;

}

const arr = [1,2,3,4];



console.log(arr.last());


/* 

🔎 What is Array.prototype?
Array.prototype is a special object in JavaScript that acts as the blueprint for all arrays.

Every array you create (like [1,2,3]) automatically inherits methods and properties from Array.prototype.

That’s why arrays can use built-in methods like .push(), .map(), .forEach(), etc. — because those methods are defined on Array.prototype.

You’re adding a new method called .last() to the prototype.

Now, all arrays can use .last() because they inherit from Array.prototype.


*/





