/* 
2695. Array Wrapper

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 

Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
Example 2:

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"
Example 3:

Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0

*/

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf = function () {
    return this.nums.reduce((acc,n)=>acc+n,0);
  };

  toString = function () {
    return `[${this.nums.join(",")}]`;
  };
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);   
console.log(String(obj1)); 

/* 

Great question — this gets into how **JavaScript’s type coercion** works when you use operators like `+` on objects.

### 🔎 Step-by-step: `obj1 + obj2`
1. **Operator `+` is applied**  
   When you write `obj1 + obj2`, JavaScript sees two objects and needs to convert them into primitives (numbers or strings) before it can perform addition.

2. **Internal conversion algorithm (`ToPrimitive`) runs**  
   JavaScript tries to convert each object into a primitive value. The order is:
   - First, call `valueOf()` if it exists and returns a primitive.
   - If `valueOf()` doesn’t return a primitive, then call `toString()`.
   - If neither returns a primitive, throw a `TypeError`.

3. **Your `valueOf` method is called**  
   In your class, `valueOf()` returns the sum of the array elements (a number).  
   Example:  
   - `obj1.valueOf()` → `3` (because `[1,2]` → 1+2)  
   - `obj2.valueOf()` → `7` (because `[3,4]` → 3+4)

4. **Addition happens**  
   Now JavaScript has two numbers: `3 + 7 = 10`.  
   That’s why `obj1 + obj2` prints `10`.

### ⚡ Why not `toString`?
If `valueOf` wasn’t defined (or returned a non-primitive), JavaScript would fall back to `toString`. In that case:
```js
class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);

console.log(obj1 + obj2); // "[1,2][3,4]"
```
Here, both objects are converted to strings, and `+` becomes string concatenation.

---

So the rule is:
- **`valueOf` → arithmetic context (numbers)**  
- **`toString` → string context (concatenation, `String(obj)`, template literals)**

Would you like me to show a **side-by-side demo** of how `obj1 + obj2` behaves with only `valueOf`, only `toString`, and both defined? That comparison makes the coercion order crystal clear.  

👉 You can explore valueOf behavior, toString behavior, or object conversion order next.

*/