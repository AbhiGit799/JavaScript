let obj = {
    name:'Peter'
};
console.log("Obj = "+obj.name);
let user = obj //In case of object copy we are copying the reference
console.log("User = "+user.name);
user.name = "Bruce"
console.log("Obj = "+obj.name);


let x = "Anil Kumar" // In case of variable when we copy, value is getting copying
let y=x
console.log("Variable X = "+x);

console.log("\n");


// Shallow Copy
let obj1={
    name:"Rama"
}
console.log("object1 is =",obj1);
let u1 = Object.assign({},obj1)
console.log("user1 is =",u1);
u1.name = "Rohan"
console.log("user1 is =",u1);
console.log("object1 is =",obj1);

console.log("\n");

// Shallow Copy-way-2
let obj2={
    name:"Sohan"
}
let u2 = {...obj2}
console.log("object2 is =",obj2);
console.log("user2 is =",u2);
u2.name = "Rohit"
console.log("user2 is =",u2);
console.log("object2 is =",obj2);

console.log("\n");

// Shallow copy will not work in nested scenario

let obj3={
    name:"Suma",
    address:{
        city:"Noida",
        state:"UP",
        country:"India"
    }
}
console.log("Object-3 = "+obj3.address.city);
let u3 = {...obj3}
console.log("User-3 = " + u3.address.city);
u3.address.city="Gurgaon"
console.log("User-3 = " + u3.address.city);
console.log("Object-3 = "+obj3.address.city);

console.log("\n");

// Deep Copy - 

let obj4={
    name:"Teena",
    address:{
        city:"Noida",
        state:"UP",
        country:"India"
    }
}
console.log("Object-4 = "+obj4.address.city);
let u4 = JSON.parse(JSON.stringify(obj4))
console.log("User-4 = " + u4.address.city);
u4.address.city="Gurgaon"
console.log("User-4 = " + u4.address.city);
console.log("Object-4 = "+obj4.address.city);

// Deep copy not work with function and date 
// We need to use lodash => https://www.npmjs.com/package/lodash
// Or CDN lodash



