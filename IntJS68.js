
// Array to Object using reduce()

const arr = ["apple", "banana", "cherry"];

// const arrToObj = arr.reduce((obj,item)=>({
//     ...obj,[item]:item
// }),{})

// console.log(arrToObj) // {apple: "apple", banana: "banana", cherry: "cherry"}

const arrToObj = arr.reduce((obj,item,index)=>({
    ...obj,[index]:item
}),{})

console.log(arrToObj)

