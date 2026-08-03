// Making passing parameter to function required by throwing error.

function check()
{
    throw new Error("No Name Provided")
}

function show(name="No name provided")
{
    return name;
}

console.log(show()); // No name provided

function display(name=check())
{
   return name;
}

console.log(display()); 



