
/*

Ex Promise to meet at hotel

stages:
1. Pending.
2. Fulfilled.------>Hotel

3. Rejected.--->See you another day.


Promise()

1. if promise() condition fullfilled
then 

resolve() ------> then()



2. if promise() condition failed then

reject()------>catch()

then() and catch() are callback functions.


Syntax for Promise
--------------------------
Syntax 1
--------------------------

let prom=new Promise();

let prom=new Promise(function(){

});
--------------------------

Syntax 2
--------------------------
let prom=new Promise(function(resolve,reject){

});

--------------------------
Syntax 3
--------------------------
let prom=new Promise(function(resolve,reject){

    if(condition)
    {
        resolve();
    }
    else
    {
        reject();
    }

    prom.then(onFulfillment);

    prom.catch(onRejection);

    let onFulfillment=(result)=>{

        console.log(result);

    }

    let onRejection=(error)=>{

        console.log(error);
    }

});


 */


 let complete=true;

 //Check for true

let prom=new Promise(function(resolve,reject){

    if(complete){

        if(complete)
        {
            resolve("I am successfull.");

        }
        else
        {
            reject("I am failed.");

        }

    }
});


console.log(prom);



function pro(com)
{
   
return new Promise(function(resolve,reject){

    

        if(com)
        {
            resolve("I am successfull.");

        }
        else
        {
            reject("I am failed.");

        }

  
});

}




console.log(pro(false));

//Below Example is for then() and catch()


function pot(cot)
{

return new Promise(function(resolve,reject)
{
    if(cot)
    {
        resolve("I am successfull.");

    }
    else
    {
        reject("I am failed");
    }

});


}

let onFulfillment=(result)=>{

    console.log(result);
}

let onRejection=(wrong)=>{

    console.log(wrong);

}

pot(true).then(onFulfillment);

pot(true).catch(onRejection);



//Below Stage is for pending


function poter(cotar)
{

return new Promise(function(resolve,reject)
{

console.log("Fetching Data, Please wait");

setTimeout(() => {

    if(cotar)
    {
        resolve("I am successfull.");

    }
    else
    {
        reject("I am failed");
    }
    
}, 3000);

   

});


}

let onFull=(result)=>{

    console.log(result);
}

let onRej=(wrong)=>{

    console.log(wrong);

}

poter(false).then(onFull);

poter(false).catch(onRej);


/*
Method Chaining


poter(false).then(onFull).catch(onRej);

 */









































