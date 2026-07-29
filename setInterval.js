
/* 

setInterval()

- Common use case example = Animation
- Repeats a block of code at every given timing event.

setInterval(function,milliseconds)

returns = IntervalId

*/

// function greet()
// {
//     console.log("Hello World!!");
    
// }

// setInterval(greet,3000)

// function showTime()
// {
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);
// }

// let display = setInterval(showTime,5000)

/* 

clearInterval()

- setInterval() executes a block of code at every specified time interval.

If you want to stop this function call

- clearInterval() method

clearInterval(intervalID)

*/

let count = 0;
let intervaID = setInterval(function(){
     count+=1;
    if(count===5)
    {
        clearInterval(intervaID)
    }
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
})

