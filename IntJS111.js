const users=[
    {id:1,name:"A"},
    {id:2,name:"B"}
]

const obj = {};

for(let u of users)
{
    obj[u.id] = u;
}

console.log(obj);







