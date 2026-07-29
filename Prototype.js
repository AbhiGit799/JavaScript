function User()
{
    this.name="Anil"   
}

User.prototype.sayHi=function(){
    console.log(this.name);
}

u1=new User();
u2 = new User();

console.log(u1);
console.log(u2);

u1.sayHi()
u2.sayHi()

// with inbuilt
String.prototype.reverseString = function(){
    return this.split("").reverse().join("")
}

let str = "Hello how are you"
console.log(str.reverseString());

