// Reverse word not character

const str = "hello world js";
console.log(str.split(" ").reverse().join(" "));

console.log("\n");


// second way
const str1 = "Hello World JS"
let words = str1.split(" ");
console.log(words);

console.log("\n");

let result = "";
for(let i=words.length-1;i>=0;i--)
{
    result+=words[i]+" ";
}
console.log(result);



