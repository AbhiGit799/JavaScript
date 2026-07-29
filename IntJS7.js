// Nested array destruct

/*
const x = [[1,2,3],[4,5,6]]

const y = x

y.push(4);

console.log(x); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], 4 ]

*/

const x = [[1,2,3],[4,5,6]]

const y = [[...x[0]],[...x[1]]]

y.push(70)

console.log(x);  // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

console.log(y);  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], 70 ]






