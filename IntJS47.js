const user={

    name:"Mohit Decodes",
    age:39,
    email:"test11@gmail.com",
    companny:"HCL Tech"
}

console.log("\n");

const jsonString = JSON.stringify(user)

console.log(jsonString);

console.log("\n");


const jsonData = JSON.parse('{"name":"Mohit Decodes","age":39,"email":"test11@gmail.com","companny":"HCL Tech"}')

console.log(jsonData);

