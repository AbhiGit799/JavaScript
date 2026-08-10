let state = {
  count: 0,
  name: "Rama",
  age: 23,
  city: "Noida",
};

let prevState = state;

function increment() {
  /* Mutating the state */
  //  state.count = state.count+1

  /* Not Mutating the state */
  // state = {count:state.count+1}
  state = { ...state, count: state.count + 1 };
}

increment();
console.log(state);

increment();
console.log(state);

increment();
console.log(state);

/* 

state = { count: state.count + 1 }

What’s Happening
==================
You’re not updating the existing state object.

Instead, you’re reassigning the variable state to point to a brand‑new object.

That new object only has one property: count.

So if state.count was 0, this creates:
{ count: 1 }

⚖️ Mutation vs Reassignment
============================
In your earlier example (state.count = state.count + 1), you mutated the original object — you changed one property but kept the rest (name, age, city).

In this new example, you reassigned state to a completely new object.
👉 All other properties (name, age, city) are lost.


🎒 Beginner Analogy
====================
Think of state as a form with four fields (count, name, age, city).

1) Mutation = erasing just the "count" field and writing a new number, while keeping the rest of the form intact.

2) Reassignment = throwing away the old form and creating a brand‑new one with only the "count" field filled in.



✅ Key Takeaways
===================
state.count = state.count + 1 → changes the existing object (mutation).

state = { count: state.count + 1 } → replaces the whole object with a new one (reassignment).


*/

// *******************************************************************************************************

/* 
🧩 The Line
state = { ...state, count: state.count + 1 };

1) Step by Step
...state (spread operator)

Copies all the existing properties of state into a new object.

So { ...state } becomes:

{
  count: 0,
  name: "Rama",
  age: 23,
  city: "Noida"
}


2) count: state.count + 1

After spreading, you add/override the count property.

Since state.count was 0, this sets count to 1.


3) Resulting object

The new state becomes:

{
  count: 1,
  name: "Rama",
  age: 23,
  city: "Noida"
}


⚖️ Why This Matters
====================
Unlike state.count = state.count + 1 (mutation), this approach creates a new object instead of changing the old one directly.

This is called immutability — you preserve the old object and make a new version with updated values.

Frameworks like Redux reducers rely on this style because it makes state changes predictable and easier to debug.


🎒 Beginner Analogy
====================
Think of state as a photocopy of a form:

...state = copy everything from the old form.

count: state.count + 1 = update just the "count" field on the copy.

You now have a fresh form with all the old details plus the updated count.


✅ Key Takeaways
==================
...state copies all properties.

count: state.count + 1 overrides the count field.

Together, they create a new object with updated count while keeping the rest intact.

This is the preferred style in immutable state updates.



*/
