console.log("A");

queueMicrotask(()=>console.log("B")); //High Priority

Promise.resolve().then(()=>console.log("C")) // Second High

setTimeout(()=>console.log("0"),0); //Third High

console.log("E");

/*

A
E
B
C
0

*/





