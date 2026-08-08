let arr = [1,2,3,4];

let result = arr.reduce((sum,val)=>sum+val,0);

console.log(result); //10

let sum=0;

for(let i=0;i<arr.length;i++)
{
  sum+=arr[i];
}

console.log(sum);


