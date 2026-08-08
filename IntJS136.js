
let arr = [1,[2,[3,4]]]

let res = arr.flat(Infinity);  //In-Built Method

console.log(res); // [ 1, 2, 3, 4 ]

function flatArray(arr)
{
    let res = [];
    for(let i of arr)
    {
        if(Array.isArray(i))
        {
           res.push(...flatArray(i))
        }else{
            res.push(i)
        }
    }
    return res;
}

console.log(flatArray(arr));






