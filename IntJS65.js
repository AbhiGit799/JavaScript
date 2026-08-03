
function b()
{
    console.log(this.user);
}

b = b.bind({user:"John"}).bind({user:"Doe"});

b() // John

// we don't have bind chaining in javascript, the second bind is ignored. The first bind sets the context to {user: "John"}, and the second bind does not change it.





