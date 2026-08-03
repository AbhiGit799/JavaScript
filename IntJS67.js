// for(var i=1;i<=3;i++){
//     setTimeout(()=>{
//          console.log(i)
//     },1000)
// }

/* 
4
4
4
*/

// for(let i=1;i<=3;i++){
//     setTimeout(()=>{
//          console.log(i)
//     },1000)
// }

/* 
1
2
3
*/

// now i want same output as let for loop using var, you can achieve this by using an IIFE (Immediately Invoked Function Expression) 
// to create a new scope for each iteration of the loop. Here's how you can do it:

for(var i=1;i<=3;i++){
 (
    (i)=>{
    setTimeout(()=>{
        console.log(i);
        
    },1000)
  }
)(i)
 
}

/* 
1
2
3
*/
