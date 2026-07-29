let a = 10;

function outer()
{
    
    let b=20;
    console.log(a,b);

    function inner()
    {
        let c=30
        console.log(a,b,c);
        
    }
    inner()
}

outer()

// Closue Example with Lexcial scope.

function greet(msg)
{
    return function(name){
        console.log(msg,name);
        
    }
}

const sayHello = greet("Hello")

sayHello("Sidhu")







