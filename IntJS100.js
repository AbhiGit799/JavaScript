const user = {name:"Mohit"}

Object.seal(user)

user.name="Amit";
user.age=29;
delete user.name;

console.log(user);  // { name: 'Amit' }

// In seal only update is possible.


const user1 = {name:"Mohit"}

Object.freeze(user1)

user1.name="Amit";
user1.age=29;
delete user1.name;

console.log(user1); 


