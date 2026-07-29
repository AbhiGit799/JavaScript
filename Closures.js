// Example-1

var sum = function(a)
{
console.log("Live Viewers = "+a);

var c=4;

return function(b)
{
 return a+b+c;
}

}
var store = sum(2); //calling

console.log(store(5));

function outerFunction() {

  let outerVariable = "I'm outside!";
  
  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable
  }
  
  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: "I'm outside!"


function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2















