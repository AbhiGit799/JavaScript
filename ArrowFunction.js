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


