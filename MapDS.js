console.log("Map Datastructure");

const userData = new Map();

userData.set('name','Anil Singh')
userData.set('age',29)
userData.set('email','anil12@gmail.com')
userData.set(1,"this is a number")
userData.set(true,"this is a boolena")

console.log(userData);

console.log("\n");

// console.log(userData.get(1));

// console.log(userData);


// userData.delete(1);

// console.log(userData);


// userData.clear()

// console.log(userData);

userData.forEach((item)=>{
    console.log(item);
    
})









