const obj = {};

const obj1 = null;

console.log(Object.keys(obj).length);

console.log(Object.keys(obj1 ?? {}).length === 0);


