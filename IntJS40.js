console.log("Start");

setTimeout(()=>{
    console.log("Timeout");
    
},0)

Promise.resolve().then(()=>{
    console.log("Promise");
    
});

(
    () => {
        console.log("IIFE");
    }
)();

console.log("END");

/* 
Order of console.log

Start
IIFE
END
Promise
Timeout

*/