/* 
2726. Calculator with Method Chaining

Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated Calculator.
getResult - This method returns the result.
Solutions within 10-5 of the actual result are considered correct.

 

Example 1:

Input: 
actions = ["Calculator", "add", "subtract", "getResult"], 
values = [10, 5, 7]
Output: 8
Explanation: 
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
Example 2:

Input: 
actions = ["Calculator", "multiply", "power", "getResult"], 
values = [2, 5, 2]
Output: 100
Explanation: 
new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100

*/

// Core Logic =>
// 🧮 Method Chaining with a Custom Class
// The idea: each method returns this (the current object), so you can chain multiple calls together before finally retrieving the result.

/* 

🔎 What is Method Chaining?
Method chaining means calling multiple methods on the same object in a single statement. 
Each method updates the object’s internal state and then returns this (the object itself). 
Because it returns the same object, you can immediately call another method on it.

🎯 General Rule
Chaining methods → return this.
Final output method → return the actual result (number, string, etc.).

⚡ Analogy
Think of it like a conveyor belt:
Each station (method) modifies the package (object).
The belt keeps moving because each station hands back the same package (this).
At the end, getResult() takes the package off the belt and gives you the finished product.


Notice:
Every math method (add, subtract, multiply, divide, power) → returns this.
Only getResult() → returns the primitive value, breaking the chain.

*/

class Calculator {
  constructor(value) {
    this.value = value;
  }

  add(value) {
    this.value += value;
    return this;
  }

  subtract(value) {
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.value /= value;
    return this;
  }

  power(value) {
    this.value **= value;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const obj = new Calculator(7).add(5).subtract(2).multiply(3).divide(2);

console.log(obj.getResult());
