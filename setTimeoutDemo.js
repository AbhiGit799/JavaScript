/*

setTimeout() => Execute a block of code after specified time.

Syntax:
seTimeout(function,milliseconds)

return IntervalID

*/


/*
function greet()
{
    console.log("Hello World!!");
    
}

let intervalId = setTimeout(greet,3000)

console.log("ID = "+intervalId);

*/


/*

Below function is calling itself, so we 
will see time after every 3 seconds.

*/


/*

function showTime()
{
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    setTimeout(showTime,3000)
}

showTime();

*/


/* 

clearTimeout()

If you want to stop this function call, 
 - clearTimeout() method

Syntax: clearTimeout(intervalID)

intervalID is the return value of the setTimeout()

*/

function increasedCount()
{
    count+=1;
    console.log(count);
}

let id = setTimeout(increasedCount,3000);

clearTimeout(id)

console.log('setTimeout is stopped.');



