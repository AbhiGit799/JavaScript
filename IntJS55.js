function demo(){
    return x=1,[],{}
}

console.log(demo()); // Output = {}


function show()
{
    return
    {
        message: "Hello World"
    }
}

// This is a classic JavaScript gotcha caused by automatic semicolon insertion (ASI).
// JavaScript sees the return keyword followed immediately by a line break. Because of ASI, 
// it inserts a semicolon right after return. So the function effectively becomes:
// That means the function returns undefined, and the object block below is never actually returned.
console.log(show()); //undefined.

