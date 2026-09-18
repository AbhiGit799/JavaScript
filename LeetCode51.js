/* 

Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false


*/

var canConstruct = function (ransomNote, magazine) {
  const count = {};
  for (char of ransomNote) {
    count[char] = (count[char] || 0) + 1;
  }

  for (char of magazine) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
};

console.log(canConstruct("aa", "aaa"));

/* 

"If I don't have this letter available, return false; otherwise, use one copy of it."


*/


/* 

It will first print the current value and then decrement it.

This happens because the postfix decrement operator (-- after the variable) 
evaluates to the variable's value before the decrement takes place.

Here is exactly how JavaScript executes console.log(count[char]--):

Look up: It finds the current value of count[char].

Pass to log: It passes that current, unchanged value to console.log() to be printed.

Decrement: It subtracts 1 from the value stored in count[char] in memory.

const count = { a: 5 };
const char = 'a';

console.log(count[char]--); // Prints: 5
console.log(count[char]);   // Prints: 4 (The value is now decremented)

*/
