const arr = [10,5,-20,8]
let max = -Infinity;
let second = -Infinity;

for(let n of arr)
{
    if(n>max){
        second = max;
        max=n;
    }else if(n>second && n!=max)
    {
        second = n
    }
}

console.log(second);


/*

🌐 What is Infinity?
In JavaScript, Infinity is a special numeric value that represents something larger than any other number.

It’s part of the global object, so you can use it directly without declaring.

🔎 Why use -Infinity in the 2nd highest logic?
We initialize first and second as -Infinity because:

It ensures any real number in the array will be greater than the starting value.

This avoids edge cases where arrays contain negative numbers.


⚡ Key Notes
Infinity and -Infinity are numeric constants in JavaScript.

They behave like numbers in comparisons:

console.log(1000 < Infinity);   // true
console.log(-1000 > -Infinity); // true


Exactly, Abhishek — in JavaScript, -Infinity is treated as the smallest possible number value.


*/




