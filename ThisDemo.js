
let user={
    name:'Anil',
    age:29,
    moreDetails:function()
    {
        console.log("This is more detail function");
        console.log("Hello my name is " +this.name + "House number = "+address.houseNo);
        
    }
}

let address={
    houseNo:456,
    city:"Noida"
}


user.moreDetails()

console.log("\n");

globalThis.userName = "Ramkumar Tiwari"

const userData={
    userName:"Anil Sidhu",
    getName:function()
    {
        console.log(this.userName);  
    },
    getArrowName:()=>{
         console.log(this.userName);
         
    }
}

userData.getName() //Anil Sidhu
userData.getArrowName() //undefined



//Arrow function this access Lexical scope this

/* 

userData.getArrowName()

getArrowName is an arrow function.

Arrow functions do not have their own this; they capture this from the surrounding lexical scope.

In this case, the surrounding scope is the global scope (not userData).

Since you wrote userName = "Ramkumar Tiwari" without var/let/const, it becomes a global variable.

So this.userName in the global scope is undefined (because userName is a variable, not a property of this).

This is a perfect example of why arrow functions are not suitable for object methods when you need this to refer to the object.


*/

console.log("\n");


const displayData={
    uname:"Mahima Sharma",
    print:function()
    {
        setTimeout(()=>{
            console.log(this.uname);
            
        },0)
    }
}

displayData.print() // Mahima Sharma

