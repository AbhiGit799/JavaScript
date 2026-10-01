/* 

LeetCode 242 — Valid Anagram

This is a very good Hash Table / Hash Map beginner problem.

Problem

Given two strings s and t, return true if t is an anagram of s.

An anagram means both strings contain the same characters with the same frequency, just possibly in a different order.


Example:

s = "anagram"
t = "nagaram"

Output: true

Because both contain:

a → 3
n → 1
g → 1
r → 1
m → 1


*/


var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = new Map();

    // Count characters in s
    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    // Remove characters using t
    for (let char of t) {
        if (!count.has(char)) {
            return false;
        }

        count.set(char, count.get(char) - 1);

        if (count.get(char) < 0) {
            return false;
        }
    }

    return true;
};

let s = "rat", t = "car";

console.log(isAnagram(s,t));




