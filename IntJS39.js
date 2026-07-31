let user = {
    name:'Anil',
    greet:function()
    {
        console.log(this.name);
        
    }
}

let greetAdmin = user.greet.bind(user)

greetAdmin()

// 🔥 Why use bind() in JS? (Real Example) #shorts
// For maintaining the this scope.








