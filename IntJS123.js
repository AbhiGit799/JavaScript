
// Chunk Array into Parts | JavaScript Interview Question #dsa #interview #coding

const arr = [1,2,3,4,5]
const size = 2;
const chunks = [];

for(let i=0;i<arr.length;i+=size)
{
    chunks.push(arr.slice(i,i+size))
}

console.log(chunks);

// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]










