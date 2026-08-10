// two strings are anagram to each other in JavaScript

const string1 = "GeeksForGeeks";
const string2 = "ForGeeksGeeks";

function AreAnagram(str1,str2)
{
    return str1.split("").sort().join("")
    === str2.split("").sort().join("");
}

console.log(AreAnagram(string1,string2)); //true

/* 

An anagram string is simply a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

For example:

listen → can be rearranged into silent

earth → can be rearranged into heart

👉 In programming or problem-solving, when we say two strings are anagrams, it means:

They have the same length.

They contain the same characters with the same frequency, but possibly in a different order.


*/










