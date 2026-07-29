(function()
{
    var fruitName = "Banana"
    console.log(fruitName);
})();


(function(color)
{
    console.log(color);
})("green");



const counter=(()=>{
    var count=0;
    return {
        increment:function(){
            count++
            console.log(count);            
        },
        decrement : function(){
            count--;
            console.log(count);
        }
    }
})();

counter.increment()
counter.increment()
counter.increment()

/* 

Immediately Invoked Function Expression

Key takeaway
Always terminate one IIFE with a semicolon before starting 
another. Otherwise, JavaScript may think you’re trying to 
call the previous function’s return value.

*/


