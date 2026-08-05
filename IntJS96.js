function createUser(name){
    let secret = "MyPass123";

    return{
        getName(){
            return name;
        },
        getSecret(){
            return secret;
        }
    }
}
const user = createUser("Mohit");
console.log(user.getSecret()); // MyPass123
console.log(user.secret); // undefined


