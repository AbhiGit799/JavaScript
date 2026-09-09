function Chunk(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i = size + i) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(Chunk([1,2,3,4,5,6],1))


