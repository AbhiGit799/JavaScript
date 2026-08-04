// Convert Array of Objects to Single Object | Reduce Method Explained 

const arr = [
    {id:1,name:"Mohit"},
    {id:2,name:"Amit"}
];

const result = arr.reduce((acc,item)=>{
    return { ...acc, ...item };
},{});

console.log(result);

// Alternative using Object.assign

const arr1 = [
    {id:1,name:'Abhishek'},
    {age:28},
    {city:"Rohtak"}
];

const singleObj = Object.assign({},...arr1)

console.log(singleObj);



