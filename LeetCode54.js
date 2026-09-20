/* 

2287. Rearrange Characters to Make Target String

You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

 

Example 1:

Input: s = "ilovecodingonleetcode", target = "code"
Output: 2
Explanation:
For the first copy of "code", take the letters at indices 4, 5, 6, and 7.
For the second copy of "code", take the letters at indices 17, 18, 19, and 20.
The strings that are formed are "ecod" and "code" which can both be rearranged into "code".
We can make at most two copies of "code", so we return 2.
Example 2:

Input: s = "abcba", target = "abc"
Output: 1
Explanation:
We can make one copy of "abc" by taking the letters at indices 0, 1, and 2.
We can make at most one copy of "abc", so we return 1.
Note that while there is an extra 'a' and 'b' at indices 3 and 4, we cannot reuse the letter 'c' at index 2, so we cannot make a second copy of "abc".


*/

var rearrangeCharacters = function (s, target) {
  const m = new Map();
  const x = new Map();
  for (let a of s) {
    m.set(a, (m.get(a) || 0) + 1);
  }

  for (let a of target) {
    x.set(a, (x.get(a) || 0) + 1);
  }

  let ans = Infinity;

  for (let [ch, freq] of x) {
    ans = Math.min(ans,Math.floor((m.get(ch) || 0)/freq));
  }

  return ans;
};

let s = "ilovecodingonleetcode",
  target = "code";

console.log(rearrangeCharacters(s, target));

let a = Infinity;
console.log(a);

/* 

Approach
========
1) Count the frequency of each character in s.
2) Count the frequency of each character in target.
3) For every character in target, compute: 

 copies = freq in s/freq in target

using integer division.

4) The answer is the minimum of these values.

*/


/* 

Ensures the first real value becomes the answer:
let ans = Infinity;
Math.min(Infinity, 3) = 3


*/
