// Count frequency of each character
let string = "Hello Ollama";

let frequency = {};

for(let index of string)
{
    if(frequency[index])
    {
        frequency[index]++;
    }else{
        frequency[index]=1
    }
}

console.log(frequency);



