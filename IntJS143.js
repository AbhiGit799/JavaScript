// JavaScript Interview Question: this Lost Inside Callback #dsa #interview #coding

// setTimeout not having this access, either it points to window this or give undefined.

const user = {
    name:"Mohit",
    greet()
    {
        setTimeout(function(){
            console.log(this.name);
            
        },0)
    }
}

user.greet() //undefined.

// use arrow function inside above settimeout as it uses lexcial this

const user1={
 name:"Mohit",
    greet()
    {
        setTimeout(()=>console.log(this.name),0)
    }
}

user1.greet() //Mohit
