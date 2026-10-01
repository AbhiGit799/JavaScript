/* 

179. Largest Number

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

 

Example 1:

Input: nums = [10,2]
Output: "210"
Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"




You can say:

"I use a custom comparator. For every two numbers a and b, I compare ab and ba. 
If ab is larger, a should come before b; otherwise b should come first. After sorting, 
I concatenate all numbers into a string. I also handle the special case where all numbers are zero."

Time complexity: O(n log n × k), where k is the average number of digits used in the comparison.

Space complexity: O(n) depending on the JavaScript sorting implementation.

*/


var largestNumber = function(nums) {
    nums.sort((a, b) => {
        let ab = String(a) + String(b);
        let ba = String(b) + String(a);

        return ba.localeCompare(ab);
    });

    // If the largest number is 0, return "0"
    if (nums[0] === 0) {
        return "0";
    }

    return nums.join("");
};



console.log(largestNumber([10,2]));

/* 
Input: nums = [3,30,34,5,9]
Output: "9534330"
*/

console.log(largestNumber([3,30,34,5,9]));




/* 

Simple interview definition

localeCompare() is a JavaScript String method that compares two strings and returns a negative, zero, or positive 
value depending on their relative ordering. It is commonly used as a comparator inside sort().


-1 : The referenceString comes before the compareString.

1 : The referenceString comes after the compareString.

0 : Both strings are equivalent.

*/



const fruits = ['banana', 'apple', 'cherry'];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);













