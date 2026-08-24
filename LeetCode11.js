// Chunk Array

var chunk = function (arr, size) {
  let chunkArr = [];
  let finalArr = [];

  if (arr.length > 0) {

    for (a of arr) {
        
      if (chunkArr.length < size) {
        chunkArr.push(a);
      } else {
        finalArr.push(chunkArr);
        chunkArr = [];
        chunkArr.push(a);
      }
    }

    finalArr.push(chunkArr);
  }

  return finalArr;

};

console.log(chunk([1,9,6,3,2],3));


