let arr = ['a','b','a','c','b','c']

let result = arr.reduce((acc,val)=>{
    acc[val] = (acc[val]||0)+1;
    return acc;
},{})

console.log(result);

console.log("\n");

let freq ={};

for(let i of arr)
{
    if(freq[i])
    {
        freq[i]++;
    }else{
        freq[i]=1;
    }
}

console.log(freq);

