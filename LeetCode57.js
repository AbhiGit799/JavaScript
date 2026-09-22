/* 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

How it works
*************
1) The slice(start, end) method extracts a section of a string and returns it as a new string.
2) A negative index counts backward from the end of the string. In this case, -1 represents the very last character ("r").
3) Because the end index is exclusive, slice(0, -1) extracts characters from index 0 up to (but not including) the last character.


The String.prototype.startsWith() method in JavaScript determines whether a string begins with the characters of a specified string. 
It executes a case-sensitive check and returns a boolean value (true or false)


*/

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }
   return prefix;
};

let input = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(input));


