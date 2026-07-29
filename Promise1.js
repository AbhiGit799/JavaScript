/* 

In JavaScript, a Promise is an object that represents the eventual result of an asynchronous operation — it can either succeed (fulfilled) or fail (rejected). Instead of immediately returning a value, asynchronous functions return a Promise, which will later provide the result once the operation finishes.

Key Concepts of Promises
*************************
Definition: A Promise is a placeholder for a value that will be available in the future.

States:
-------
 a) Pending → initial state, still waiting.
 b) Fulfilled → operation completed successfully.
c)  Rejected → operation failed with an error.

Handlers: You attach .then() for success and .catch() for errors.


🚀 Advanced Promise Methods
----------------------------
Promise.all → waits for all promises to finish.
Promise.race → resolves/rejects as soon as one finishes.
Promise.any → resolves with the first success.
Promise.allSettled → waits for all, whether success or failure

*/

let a=10
let b=20
let c=30
let d=a+b+c;
console.log(d);

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Code executed.")
    },2000)
})

promise.then((result)=>{
    console.log(result);
})


let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task successful!");
  } else {
    reject("Task failed!");
  }
});

myPromise
  .then(result => console.log(result))   // runs if resolved
  .catch(error => console.error(error)); // runs if rejected



function handleLogin()
{
    let email = "anil12@gmail.com";
    let password = "12345";

    const loginPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                login:true,id:100
            })
        },3000)
    })

    loginPromise.then((result)=>{
        if(result.login)
        {
          console.log(result);
        }
        else
        {
            console.log("Login Failed.");
            
        }
        
    })
}

handleLogin();


