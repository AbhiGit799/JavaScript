// Find the most frequent element in array

const arr = [1,2,2,3,3,3]

const freq = arr.reduce((acc,n)=>{
    acc[n] = (acc[n] || 0) +1;
    return acc;
},{});

console.log(freq);

// { '1': 1, '2': 2, '3': 3 }







