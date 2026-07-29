/*
console.log(x) //This will give error

let x = "Abhi"

*/

fruit("apple")  // Here it will not give error

console.log(typeof fruit); //function

console.log(fruit instanceof Object); //true

console.log(fruit.length); // Number of parameters.


function fruit(item)  //Here, item is parameter
{
    console.log(item);
    
}

//Spread operator

function display(...item)
{
    console.log(item);
}

display("Hello","World","OPP","UI/UX","TAP")









