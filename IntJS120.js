// Find Longest String in Array | JavaScript Interview Question #dsa #interview #coding


const arr = ["JS","JavaScript","React"];

let longest = "";

for(let s of arr)
{
    if(s.length>longest.length)
    {
        longest = s;
    }
}

console.log(longest);


