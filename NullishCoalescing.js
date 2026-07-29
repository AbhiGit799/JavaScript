/* 

The nullish coalescing operator (??) in JavaScript is used to provide 
default values only when a variable is null or undefined, unlike the 
logical OR (||) operator which also treats other falsy values 
like 0, "", or false as missing. This makes ?? safer for 
scenarios where you want to preserve valid falsy values.

⚠️ Important Notes
Operator precedence: ?? has lower precedence than || and &&. 
Always use parentheses when mixing:

Not interchangeable with ||: Use ?? when you want to distinguish between 
null/undefined and other falsy values.

*/




let data =0;
console.log(data??"not a valid value"); // 0


let data1 ="";
console.log(data1??"not a valid value"); // 


let data2 =null;
console.log(data2??"not a valid value"); //not a valid value


let data3 =null;
console.log(data3??"not a valid value"); //not a valid value


let count;
count ??= 10;
console.log(count); // 10


