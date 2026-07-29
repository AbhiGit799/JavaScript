//  #4 JavaScript Logical Interview Question | Convert Object Keys to Array | 3 Ways | JS Shorts

let data = {
    name:'Anil',
    age:38,
    email:"anil12@test.com"
}

// Method-1
let keys = Object.keys(data);
console.log(keys);

// Method-2
let arrykeys=[];
let index=0;

for(k in data)
{
  arrykeys[index]=k;
  index++;
}
console.log(arrykeys);

// Method-3
let ark=[]
for(j in data)
{
    ark[ark.length]=j
}
console.log(ark);


