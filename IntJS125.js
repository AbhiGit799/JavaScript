// Check Palindrome Without reverse() | JavaScript Interview Question #dsa #interview #coding

// Using reverse method.
function isPalind(str)
{
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalind("world")); // false
console.log(isPalind("madam")); // true

/* 
Pros: Simple and easy to understand.
Cons: Uses extra memory for reversed string
*/


// Two-Pointer Approach

function isPalindr(str)
{
    let left=0,right=str.length-1;
    while(left<right)
    {
        if(str[left]!==str[right])
        {
            return false;
        }
        left++;
        right--
    }
    return true;
}

console.log(isPalindr("madam"));  // true
console.log(isPalindr("hello"));  // false

/* 
Pros: Efficient, no extra memory needed.
Cons: Slightly more complex logic.

🔎 Step-by-Step Explanation

1) Initialize pointers

let left = 0, right = str.length - 1;

left starts at the first character (index 0).

right starts at the last character (index str.length - 1).

2) Loop until pointers meet

while (left < right) {

The loop runs as long as left is before right.

This ensures we compare characters from both ends moving inward.

3) Compare characters
if (str[left] !== str[right]) return false;

If the characters at left and right don’t match → the string is not a palindrome.

Example: "hello" → h ≠ o, so return false.

4) Move pointers inward
left++;
right--;

After each comparison:

left moves one step forward.

right moves one step backward.

This way, we keep checking the next pair of characters.


5) Return true if all match
return true;

If the loop finishes without finding a mismatch, all characters matched perfectly.

That means the string is a palindrome.


⚡ Example Walkthrough: "madam"
left=0 (m) vs right=4 (m) → match ✅

left=1 (a) vs right=3 (a) → match ✅

left=2 (d) vs right=2 (d) → pointers meet → loop ends.

No mismatches → return true.

✅ Why This Works
Efficient: Only checks half the string.

Memory-friendly: Doesn’t create a reversed copy.

Common in interviews because it shows algorithmic thinking.


*/


