// Remove Falsy Values Manually | JavaScript Interview Question #dsa #interview #coding

const arr = [0,1,false,2,"",3];

const clean = [];

for(let n of arr)
{
    if(n)
    {
        clean.push(n)
    }
}

console.log(clean);








