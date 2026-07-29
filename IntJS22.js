// #17 Calculate String Length Without length Property | JavaScript Interview Question #jsshorts


let str = "Code step by step"

console.log(checkLength(str));


function checkLength(str)
{
    let count = 0;

    for(let x of str)
    {
        count++;
    }
    return count;
}






