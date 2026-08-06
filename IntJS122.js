// Group Users by City | JavaScript Interview Question #dsa #interview #coding

const users = [
    {name:"A",city:"Delhi"},
    {name:"B",city:"Noida"},
    {name:"C",city:"Noida"}
];

const grouped = {};

for(let u of users)
{
    grouped[u.city]=grouped[u.city] || [];
    grouped[u.city].push(u)
}

console.log(grouped);




