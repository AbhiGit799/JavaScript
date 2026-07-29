//Assign default value in object destructuring

const person = {
    userName:"Anil",
    email:'anil12@test.com',
    city:'Delhi'
}
const email = "admin@test.com"

const {email:mail,age=20}=person

console.log(email);

console.log(age);

console.log(email);

console.log(mail);


