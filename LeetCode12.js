// Calculator with Method Chaining.

/* 
🔑 Key Points
===============
Method chaining works because each method returns this.
The value() method is the “terminator” — it gives the final result instead of returning this.
You can extend this with more operations like mod(), pow(), or even reset().

🔑 Key Points
Method chaining works because each method returns this.

The value() method is the “terminator” — it gives the final result instead of returning this.

You can extend this with more operations like mod(), pow(), or even reset().


*/

class Calculator{
    
    constructor(initValue=0)
    {
        this.valueHolder = initValue;
    }

   add(num)
   {
    this.valueHolder+=num;
    return this;
   }

   subtract(num)
   {
    this.valueHolder-=num;
    return this;
   }

   multi(num)
   {
    this.valueHolder*=num;
    return this;
   }

   divide(num)
   {
    this.valueHolder/=num;
    return this;
   }

   value()
   {
    return this.valueHolder;
   }

}

const result = new Calculator(10).add(7);

console.log(result);



