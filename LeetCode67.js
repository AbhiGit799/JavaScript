/*
1768. Merge Strings Alternately

You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, 
append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r



*/




var mergeAlternately = function (word1, word2) {
    let str = "";

    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            str += word1[i];
        }

        if (i < word2.length) {
            str += word2[i];
        }

    }

    return str;
};


let word1 = "ab", word2 = "pqrs";

console.log(mergeAlternately(word1,word2));


/*

Your idea is close, but you don't need two loops. You want to take one character from word1, 
then one from word2, moving forward together.

We need the same index i for both strings.

So:

for (let i = 0; i < maxLength; i++) {
    ...
}

One more important point

This condition:

if (i < word1.length)

prevents accessing a character that doesn't exist.

Similarly:

if (i < word2.length)

handles the case where word2 is shorter.

*/








