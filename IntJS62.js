const number={
    x:1,
    y:2,
    sum(){
        return this.x+this.y;
    }
}

// const result=number.sum();
// console.log(result); // 3

// const result = number.sum 
// console.log(result())  //NaN  //Because we are calling the function without the context of the object, so 'this' is undefined.

const result = number.sum.bind(number) // bind method is used to bind the context of the function to the object.
console.log(result())  // 3






