// const loginPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({login:true,name:'ABC'})
//     },2000)
// })

// loginPromise.then((result)=>{
//   console.log(result);
  
// })

const loginPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({login:true,name:'ABC'})
    },2000)
})


const tokenPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({login:'aSDFWERWERSDFW#@#$@#'})
    },5000)
})


async function handleLoginPromise(){
    const result = await loginPromise
    const tokenresult = await tokenPromise
    console.log(result);
    console.log(tokenresult);
}

handleLoginPromise()


