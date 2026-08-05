// Find first non repeating element


const arr = [1,2,2,3,3,3,4];

let freq = {};

// Step 1: Count frequency
for(let num of arr)
{
    freq[num] = (freq[num]||0)+1;
}

// Step 2: Find first with count = 1

for(let num of arr)
{
    if(freq[num]===1)
    {
        console.log(num);
        break;        
    }

}


