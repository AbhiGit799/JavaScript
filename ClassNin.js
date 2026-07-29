
/**
 * Class in JS are like blueprint.
 
 the 'new' keyword

 -create a new empty object {}

 -sets the value of 'this' to be the new empty object

 -calls the constructor method.

 */

class User
{

    constructor(name,email)
    {
        this.name=name;
        this.email=email;
        this.score=0;

    }

    login()
    {
        console.log(this.name, 'just logged in');
       

    }

    logout()
    {
        console.log(this.name, 'just logged out');
       

    }

    updatescore()
    {
        this.score++;
        console.log(this.name, 'score is now', this.score);

        
    }

}

class Admin extends User
{
    deleteuser(user)
    {
        users=users.filter(u=>{

            return u.email!=u.email;
        })
    }

}


var u1=new User("ABC","abc@12gmail.com");

var u2=new User("XYC","xyc@12gmail.com");

var admin=new Admin('Shan','shan12@gmail.com');

console.log(u1);

console.log(u2);


u1.login();

u1.logout();

u1.updatescore();

var users=[u1,u2];

admin.deleteuser(u2);

console.log(users);




















