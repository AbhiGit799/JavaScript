// Shallow Copy Bug | Spread Operator | JS Interview #dsa #interview #coding

const user = {
  profile: {
    name: "A",
  },
};

const copy = { ...user };

copy.profile.name = "B";

console.log(user.profile.name); // B

/* 
⚡ Key Concept
================
Shallow copy (like spread ... or Object.assign) only copies the first level. Nested objects remain linked.
Deep copy creates a completely independent copy, including nested objects.

✅ How to make a deep copy
===========================
If you want copy to be independent:
const copy = structuredClone(user); // modern way
// OR
const copy = JSON.parse(JSON.stringify(user)); // older trick

Now, changing copy.profile.name won’t affect user.profile.name.

🔍 Step-by-step explanation
1) Original object  
user is an object with a nested object inside it:

2) Shallow copy using spread (...)  
const copy = { ...user };  
This creates a new object copy, but only the top-level properties are copied.

copy.profile still points to the same object in memory as user.profile.

3) Mutation of nested property  
When you do:
copy.profile.name = "B";
You’re not changing copy alone — you’re actually modifying the shared profile object.
Since both user.profile and copy.profile reference the same object, the change affects both.

4) Even though you changed copy.profile.name, the original user.profile.name also shows "B" because they share the same reference.

*/