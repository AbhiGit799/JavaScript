let arr = [10,5,20,8]

let result = Math.max(...arr)

//Not correct method as we are breaking array. As Math.max() not accept array

console.log(result);

let max=arr[0];

for(let i=1;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}

console.log(max);




