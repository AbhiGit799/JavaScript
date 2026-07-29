console.log(f); //undefined.  //Worked by Hositing

var f="apple"  // Here value is also getting assigned.

fruit(); //It works because of hoisting.

function fruit()
{
    console.log("Fruit function called.");
    
}

// console.log(msg); // Error
// let msg = "Hello World!!"

// console.log(d); // Error
// const d = "OK"

// Function Expression
// ******************

/*

show() //Giving error show is not a function

var show = function()
{
    console.log("show function.");
    
}

*/

console.log(show);

var show = function()
{
    console.log("show function.");
    
}





