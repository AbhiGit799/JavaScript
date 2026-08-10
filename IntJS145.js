function add(x,y)
{
    return x+y;
}

function multiply(x,y)
{
    return x*y;
}

function higherOrderFunction(x,y,anyfun)
{
    return anyfun(x,y);
}

console.log(higherOrderFunction(3,5,add));//

function repeatTwice(action)
{
    action();
    action();
}

function sayHello()
{
    console.log("Hello!!");
    
}

repeatTwice(sayHello);

/* 

A higher-order function in JavaScript is any function that either 
takes another function as an argument or returns a 
function as its result. 
This makes them powerful tools for writing reusable, modular, and 
expressive code, especially when working with arrays or callbacks.


*/
