// Ex-1 setTimeout code will run immediately 

// setTimeout(() => {
//  console.log("setTimeout");
// }, 0);

// Ex-2 setImmediate code will give error because setImmediate is not defined in browser environment

// setImmediate(() => {
//  console.log("setImmediate");
// });


// Ex-3 queueMicrotask code will run immediately after the current script execution and before any other tasks in the event loop
// queueMicrotask(() => {
//   console.log('High priority task');
// });



// Ex-4 

// "use strict";

// const obj = {
//  name: "john",
//  getName: function () {
//  return this.name;
//  }
// };

// const a = obj.getName;
// a();






