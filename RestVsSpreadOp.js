/* 
REST Operator
**************
Used to gather multiple elements or arguments into a single collection

function sum(...numbers)
{
 console.log(numbers)
}

sum(1,2,3);

*/

function fruits(...items)
{
 console.log(items);
}
//Rest operator with function
fruits("Apple","Mango","Cherry","Banana")

//Rest operator with Array
const [leader,...othermembers]=['sam','anil','rohit','rohan']
console.log(leader,othermembers);

//Rest Operator with Object
const {name,...otherData} = {name:'Anil',age:29,city:'Noida',email:'anil@test.com'}
console.log(name,otherData);




/* 
SPREAD Operator {used at Right side}
*************************************
Spread = expan things out.
Allow you to expand or unpack elements from an array,string or object

Ex:
const a = [1,2,3]
const b = [4,5,6]
const result = [...a,...b]  //Creating new array combining a and b

*/


console.log("\n");

// With Array

let numData1 = [1,2,3,4]
let numData2 = [5,6,7,8]

let numData3 = [...numData1,...numData2]
console.log(numData3);

// With Object
const userData1 = {name:"Anil",city:"Noida",company:"LTM"};
const userData2 = {name:"Ramkumar",...userData1};
const userData3 = {...userData1,name:"Raja"};

console.log(userData1);
console.log(userData2);
console.log(userData3);








