/* 

Optional chaining (?.) in JavaScript is a safe way to access deeply 
nested object properties or call functions without throwing errors 
when a reference is null or undefined. Instead of crashing, 
it simply returns undefined.



*/


const user = {
    name:'Thapa',
    age:28,
    address:{
        street:'Main St',
        city:'New Road',
        state:'PK',
        zip:101010
    },
}

console.log(user.address.city);

console.log(user.address.roadnumber);//undefined

// console.log(user.address.roadnumber.housenumber); //Give Error

console.log(user.address.roadnumber?.housenumber);//undefined

console.log(user.address?.city);

console.log("\n");

console.log("*************************************");

console.log("\n");

const usersArray=[
    {name:"John",age:30},
    {name:"Jane",age:25},
    {name:"Sam",age:35}
]

console.log(usersArray[1].name);

console.log(usersArray[5]?.name); // undefined

// With function
console.log(user.someNonExistentMethod?.()); // undefined


const person = { favoriteFoods: ["pizza", "cake"] };
console.log(person?.favoriteFoods?.[1]); 
// Output: "cake"







