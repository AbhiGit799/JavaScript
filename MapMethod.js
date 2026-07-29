//Map() returns new Array

/* 

✅ Use map when you want to transform each element into something else (like extracting names).
✅ Use filter when you want to keep only certain elements based on a condition.

*/

var a = [1,3,5,8,10]

var b = a.map(a=>a*10)

console.log(b);


var x = [10,20,30,40,50]

var y = x.map(addTen)

function addTen(x)
{
    return x+10
}

console.log(y);

console.log("\n");


var ary = [
    {fname:"XYZ",lname:"Baba"},
    {fname:"ABC",lname:"Sharma"},
    {fname:"DEF",lname:"Kumar"},
]

var ans = ary.map(matchName)

function matchName(x)
{
   return x.fname+" "+x.lname;
}

console.log(ans);




