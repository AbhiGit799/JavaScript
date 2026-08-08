// Two Sum Problem - DSA Interview Question

const arr = [2,7,11,15];

const map = new Map();

for(let i=0;i<arr.length;i++)
{
    map.set(arr[i],i);
}

// Print Map Method-1 Using forEach
map.forEach((value,key)=>{
    console.log(key,value);
})

console.log("\n");

for(let [key,value] of map)
{
    console.log(key,value);
    
}

console.log("\n");

// Print Map Method-3 By converting to array
console.log([...map]);

console.log("\n");

// Solving using HashMap.

let target = 18;
let map1={};

for(let i=0;i<arr.length;i++)
{
  let diff = target-arr[i];

  if(map1[diff]!==undefined)
  {
    console.log("Indexes: ",[map1[diff],i]);
  }

  map1[arr[i]]=i;

}

// [1,2]
