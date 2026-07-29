// For chaning the value of this we use call and apply

const user={
    name:"Anil Sidhu",
    age:29,
    showDetails:function()
    {
        console.log("My name is "+this.name +"and my age is "+this.age);
        
    }
}

user.showDetails()

const admin={
    name:'Aman Kumar',
    age:34
}

user.showDetails.call(admin) // for changing the value of this

function greetings(city,country)
{
    console.log("Greetings from "+this.name+"and my city is = "+city+"and country = "+country);
    
}

greetings.call(user,"Noida")


// =======================================================================================

console.log("\n");

// In Apply we pass arguments in the form of array

greetings.apply(user,["Noida","India"])







