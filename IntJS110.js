
const arr = [1,2,3,2,4,1,5,1];

let freq={};
let maxCount = 0;
let mostRepeated;

// for(let num of arr)
// {
//     freq[num] = (freq[num]||0)+1;

//     if(freq[num]>maxCount)
//     {
//         maxCount = freq[num];
//         mostRepeated = num
//     }
// }

// console.log(`Most Repeated element ${mostRepeated} = Count : ${maxCount}`);


// for(let num of arr)
// {
//     freq[num] = num
// }

// console.log(freq);


for(let num of arr)
{
    freq[num] = freq[num]||0
}

console.log(freq);


/*
🧩 Line 1: Counting Frequency

freq[num] = (freq[num] || 0) + 1;

freq[num] → This uses the current number (num) as a key in the freq object.

(freq[num] || 0) → If the key doesn’t exist yet, freq[num] is undefined. The || 0 makes it default to 0.

+ 1 → Adds one to the existing count.

Result → Each time the number appears, its count increases by 1.

👉 Example:

First time num = 2 → freq[2] = (undefined || 0) + 1 = 1

Next time num = 2 → freq[2] = (1 || 0) + 1 = 2


🧩 Line 2–4: Tracking the Most Repeated
if (freq[num] > maxCount) {
  maxCount = freq[num];
  mostRepeated = num;
}

Condition: if (freq[num] > maxCount)
Checks if the current number’s count is greater than the highest count seen so far.

Update maxCount:
If true, set maxCount to this new higher count.

Update mostRepeated:
Store the current number (num) as the most repeated element.

👉 Example:

Suppose freq[3] = 4 and maxCount = 3.

Since 4 > 3, update:

maxCount = 4

mostRepeated = 3

*/
