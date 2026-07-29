
/*
 When we write async it will return promise.

 Aysnc/Await

 There's a special syntax to work with promise in a more comfortable fashion,
 called "async/await". It's surprisingly easy to use.

 The word "async" before a function means one simple thing : a function always
 returns a promise.

 So the async keyword is added to functions to tell them to return a promise rather
 than directly returning the value.

 We can use await when calling any function that returns a Promise, including
 web API functions.
 
 The keyword await make JS wait until that promise settles and returns its
 result.

 */

 const probj1 = new Promise((resolve,reject)=>{

    setTimeout(() => {

        let rollno=[10,20,30,40,50];

        resolve(rollno);
        
    }, 4000);


 });

 const getBiodata=(indexdata)=>{

    return new Promise((resolve,reject)=>{

        setTimeout((indexdata) => {

            let biodata={

                name:"RAM",
                age:26
            }

            resolve(`My name is ${biodata.name} and I am ${biodata.age} years old`);
            
            
            
        }, 4000, indexdata);
    });

 }


 async function getdata()
 {
    const rolldata= await probj1;

    console.log(rolldata);


const info = await getBiodata(rolldata[1]);


console.log(info);

return info;

 }


 getdata();

const getname=getdata().then((myname)=>{

    console.log(myname);

});




























