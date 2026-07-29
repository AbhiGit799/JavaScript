
/*

In JavaScript, you can also pass a function as an 
argument to a function. 
This function that is passed as an argument inside of another function is called a callback function. For example,

Benefit of Callback Function
The benefit of using a callback function is that you can wait for the 
result of a previous function call and then execute another function call.


*/

console.log("Callback Function")

/*

console.log("");

Syntax 1
--------------

function show(a)
{
console.log("I am a show function"+a);
}

function geeky(callback)
{
    var a=101;
    callback(a);

}

geeky(show);


Syntax 2
--------------

function geeky(callback)
{
    var a=101;
    callback(a);
}

geeky(function show(a){

    console.log("I am show function "+a);

});


Syntax 3
--------------

function geeky(callback)
{
    var a=101;
    callback(a);
}

geeky(function(a){

    console.log("I am a show");

});


Syntax 4
--------------

function geeky(callback)
{
    var a=101;
    callback(a);

}

geeky(a=>console.log("I am show "+a));




 */



/*

Callback functions are of two types

1. Synchronous.

2. Asynchronous.

-------------------------------------------------
Synchronous : It waits for each operation to complete
after that it executes the next operation.

function show()
{
    console.log("I am show");
}

geeky(show);

console.log("End");

-------------------------------------------------

Asynchronous: It never waits for each operation to
complete, rather it executes all operations in the
first go only.

setTimeout(function show(){

    console.log("I am show");

},5000);


console.log("End");




*/

//Example 1

function show()
{
    console.log("I am show");
}

function geeky(callback)
{
    callback();

}


geeky(show);

//Example 2

function showa(a)
{
    console.log("I am show"+a);
}

function geekyy(a, callback)
{
    
    callback(a);

}


geekyy(103,showa);

//Example 3


function greet(callback)
{
    var b=202;
    callback(b);
}

 greet(function(b){

    console.log("I am hello function"+b);

})

//Example 4


function good(callback)
{
    var x=099;
    callback(x);

}

good(y=>{

    console.log("I am good function"+y);
});

//Example Synchronous

function disp()
{
    console.log("I am Display Synchronous");
}

function tt(callback)
{
    callback();
}

tt(disp);

console.log("End");


//Asynchronous

setTimeout(() => {

    console.log("I am asynchronous")
    
}, 4000);


console.log("End Asyn");








