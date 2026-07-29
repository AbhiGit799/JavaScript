
function greet(name,callback)
{
    console.log(name);
    callback()
    
}

function bye()
{
    console.log("Good Bye");
    
}

greet("Anil",bye)




function display(message, callback) {
    console.log(message); // print the message

    if (callback) {       // check if callback is provided
        callback("Red");  // call the callback with some value
    }
}

display("Hello World", (color) => {
    console.log("Callback received:", color);
});

let data=["Anil","Sam","Tom"]

data.forEach((item)=>{
    console.log(item);
    
})









