function outer()
{
    let message = "Hello World!!"

    function inner()
    {
        console.log(message);
        
    }

    return inner;
}

let result = outer();

result()


function counterApp()
{
    let data=0;

    return{
        increment:function()
        {
            //return data++
            console.log(++data);
            
        },
        decrement:function()
        {
            // return data--
            console.log(--data);
            
        }
    }
}

let counter = counterApp();

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());

counter.increment();
counter.increment();
counter.increment();
counter.increment();




