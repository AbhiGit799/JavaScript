// #9 Count Words in a String in JavaScript 

let str = "code   Step by step"
let count=0
let isWord=false

for(let i=0;i<str.length;i++)
{
    if(str[i]!==" " && !isWord)
    {
        count++;
        isWord=true;
    }else if(str[i]==" "){
      isWord=false
    }
}

console.log(count);









