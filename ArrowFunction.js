let add = ()=>{
    return 2+2;
}
console.log(add());

let multi = () => 20*20
console.log(multi());

// For objects in arrow function we use round braces

const user = ()=>({name:"Anil Sidhu"})
console.log(user());


function getAll()
{
    console.log(arguments);
}
getAll("green","apple","sunday")

/* 
In JavaScript, the arguments keyword refers to a special array‑like object available inside non‑arrow functions 
that contains all the values passed to that function. It’s useful for handling variable numbers of parameters, 
but in modern code, the rest parameter (...) is preferred.

*/
