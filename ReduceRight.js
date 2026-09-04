/* 

Array.prototype.reduceRight() is a built-in JavaScript array method that works almost identically to Array.prototype.reduce(), 
with one key difference: it processes the array elements from right to left (from the last element to the first).

Syntax
======
array.reduceRight(callback(accumulator, currentValue, index, array), initialValue)


accumulator: The value returned from the previous step (or initialValue on the first step).

currentValue: The current element being processed from the array.

initialValue (optional): The value to start with. If omitted, 
reduceRight uses the last element of the array as the initial accumulator and starts processing from the second-to-last element.


Feature                               reduce()                                                         reduceRight()
Direction                             Left-to-Right (→),                                               Right-to-Left (←)
First Element Processed               Index 0 (or 1 if no initial value),                              Index array.length - 1
Common Use Cases                      "Summing numbers, flattening, pipeline chaining",                "Function composition, 
                                                                                                        parsing right-associative structures, reversing data"


*/


const arr = ["World","Hello"];

const result = arr.reduceRight((acc,curr)=>acc+" "+curr);

console.log(result);

const arr1 = [[1,2],[3,4],[4,5]]

const result1 = arr1.reduceRight((acc,curr)=>acc.concat(curr),[])

console.log(result1);
















