const numbers = [5,6,21,3,7];

console.log(Math.max(...numbers)) //21

// Without spread operatro

console.log(Math.max.apply(null,numbers)) // 21





