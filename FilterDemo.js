/* 

✅ Use map when you want to transform each element into something else (like extracting names).
✅ Use filter when you want to keep only certain elements based on a condition.

*/

var ages = [10,12,19,20]

var b = ages.filter(x=>x>18)

console.log(b);

var c = ages.filter(ageLessthan20)

function ageLessthan20(x)
{
  return x<20
}

console.log(c);


var ary = [
    {fname:"XYZ",lname:"Baba",age:23},
    {fname:"ABC",lname:"Sharma",age:27},
    {fname:"DEF",lname:"Kumar",age:31},
]

function ageLessthan30(x)
{
    return x.age<30
}

var ans = ary.filter(ageLessthan30)

console.log(ans);

