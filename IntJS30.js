
function checkOutput()
{
    var a=b=3;
    console.log(typeof a); //number
    console.log(typeof b); //number
    
}

checkOutput();

console.log(typeof a); // undefined
console.log(typeof b); // number

// Here a is defined with var keyword that's why a become undefined outside the scope.
// b is acting as global.





