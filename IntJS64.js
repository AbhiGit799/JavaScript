function noName()
{
    throw new Error("Name is required.");
}

function displayName(name=noName()) //passing function as default parameter
{
    console.log("Name: "+name)
}

displayName("John") // Name: John
displayName() // Error: Name is required.




