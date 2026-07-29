function prom(complete)
{

return new Promise(function(resolve,reject)
{

console.log("Fetching Data, Please Wait");

setTimeout(() => {

    if(complete)
    {
        resolve("I am successfull.");

    }
    else
    {
        reject("I am failed");
    }

    
}, 2000);



   
});


}

// let onFulfillment=(result)=>{

//     console.log(result);
// }

// let onRejection=(wrong)=>{

//     console.log(wrong);

// }

// pot(true).then(onFulfillment);

// pot(true).catch(onRejection);


//Below is an example of method Chaining.

//prom(false).then(onFulfillment).catch(onRejection);

prom(false).then((result)=>{

    console.log(result);
}).catch((wrong)=>{

    console.log(wrong);

});










