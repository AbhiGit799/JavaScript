// #6 Reverse an Array Without reverse | JavaScript Logical Interview Question #javascript #dsa

let data = [2,6,9,1,10,30]
let temp = []
function reverseData()
{
    for(let i=data.length-1;i>=0;i--)
    {
        console.log(data[i]);
        temp.push(data[i])
    }
}

reverseData(data)
console.log(temp);

