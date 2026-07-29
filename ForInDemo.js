// For Iterating Object
// For-In Loop
// Will not get index in for in loop

let user={
    name:'anil',
    age:26,
    email:'anil12@test.com',
    admin:true
}

for(let key in user)
{
    console.log(key);
    
}
console.log("\n");

for(let key in user)
{
    console.log(user[key]);
    
}

console.log("\n");




