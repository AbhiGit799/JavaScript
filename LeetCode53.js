/* 
1160. Find Words That Can Be Formed by Characters


You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once for each word in words).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Constraints:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
words[i] and chars consist of lowercase English letters.

*/

var countCharacters = function (words, chars) {
  let result = 0;
  const charMap = new Map();

  for (const ch of chars) {
    charMap.set(ch, (charMap.get(ch) || 0) + 1);
  }
 

  for (const word of words) {
    const wordMap = new Map();
    let valid = true;
    for (const ch of word) {
      wordMap.set(ch, (wordMap.get(ch) || 0) + 1);
      if (wordMap.get(ch) > (charMap.get(ch) || 0)) {
        valid = false;
        break;
      }
    }
    if (valid) {
      result = result + word.length;
    }
  }

  return result;
};

let words = ["cat", "bt", "hat", "tree"];
let chars = "atach";

console.log(countCharacters(words, chars));
