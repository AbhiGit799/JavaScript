/* 
2618. Check if Object Instance of Class


Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.
Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".




*/

// Imp Note => instanceof only works with objects created by constructors.

// instanceof = It is primarily used at runtime to verify if an object is an instance of a specific class or inherits from it

// Object(obj) => Object Coercion (Type Conversion)If a primitive value (like a string, number, or boolean) is passed into Object(), 
// it wraps the primitive in its corresponding object wrapper class (e.g., String, Number, Boolean).

// The typeof operator returns the data type of a JavaScript variable.

// Solution


var checkIfInstanceOf = function(obj, classFunction) {
    // Handle null/undefined safely
    if (obj == null || typeof classFunction !== "function") return false;

    // Normal instanceof check
    if (obj instanceof classFunction) return true;

    // Handle primitives by boxing them
    try {
        let boxed = Object(obj); // wrap primitive into its object form
        if (boxed instanceof classFunction) return true;
    } catch (e) {
        return false;
    }

    return false;
};








