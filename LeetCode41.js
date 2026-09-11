/* 
2694. Event Emitter

🎉 What is an EventEmitter?
Think of an EventEmitter like a party host:
The host announces events (like “Dinner is ready!”).
Guests can subscribe to those announcements (like “Call me when dinner is ready”).
When the host emits the event, all subscribed guests get notified in the order they signed up.

🛠 The Two Main Methods
1. subscribe
=============
You tell the EventEmitter: “Hey, when this event happens, run my function.”

Example:
emitter.subscribe("dinner", () => "Yay, food!");

This means: when the "dinner" event is announced, your function runs and returns "Yay, food!".

It also gives you an unsubscribe option, like saying: “Actually, don’t call me anymore.”

2. emit
========
The host announces the event.
All subscribed functions (callbacks) run in order.
Example:
emitter.emit("dinner");
If two guests subscribed, both get called, and you get back an array of their responses.


🍕 Real-World Analogy
======================
Imagine a pizza shop:
Customers say: “Call me when pizza is ready.” → That’s subscribe.
When the pizza is ready, the shop calls all customers → That’s emit.
If a customer changes their mind, they say: “Don’t call me anymore.” → That’s unsubscribe.

✨ Key Takeaways
==================
subscribe = “Add me to the list of listeners.”
emit = “Notify everyone on the list.”
unsubscribe = “Remove me from the list.”

✨ Beginner Summary
=======================
EventEmitter is like a list of phone numbers for each event.
subscribe = add your number to the list.
emit = call everyone on the list.
unsubscribe = remove your number from the list.


*/

class EventEmitter {

  constructor() {
    this.events = new Map();
  }

   // When we create a new EventEmitter, we start with an empty Map (like a dictionary).
   // This Map will store event names (like "pizza") and their list of callbacks (functions to run).

   // Here, we are using clousre, that's why we created unsubscribe() inside subscribe()
   subscribe(eventName, callback) {

    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listeners = this.events.get(eventName);
    listeners.push(callback);

    // If this event doesn’t exist yet, we create a new empty list for it.
    // Then we add the callback (function) to that list.

    return {
      unsubscribe: () => {
        const idx = listeners.indexOf(callback);
        if (idx !== -1) {
          listeners.splice(idx, 1);
        }
        return undefined;
      }
    };
     
     // We return an object with an unsubscribe method.
     // Calling unsubscribe() removes this callback from the list.
  }

  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [];
    }

    const listeners = this.events.get(eventName);
    const results = [];

    for (const cb of listeners) {
      results.push(cb(...args));
    }

    return results;
  }

   // If no one subscribed to this event, return an empty array.
   // Otherwise, loop through all callbacks for this event.
   // Call each one with the given arguments (args).
   // Collect their results into an array and return it.

   // cb is a function.
   // ...args spreads the arguments array into the function. Example: if args = ["Arjun"], then cb(...args) becomes cb("Arjun").
   // results.push(cb(...args))
   // Run the callback with the arguments.
   // Take whatever it returns and add it to the results array.

}



const emitter = new EventEmitter();

const sub1 = emitter.subscribe("pizza",()=>"Customer-1 Yum!!");
const sub2 = emitter.subscribe("pizza",()=>"Customer-2 Delicious");

console.log(emitter.emit("pizza"));
sub1.unsubscribe();

console.log(emitter.emit("pizza"));


const sub3 = emitter.subscribe("greet",(name)=>{
return `Hello, ${name}!`;
})

const sub4 = emitter.subscribe("greet",(name)=>{
return `Welcome ${name} have a great day!`;
});

console.log(emitter.emit("greet",["Arjun"]));
console.log(emitter.emit("greet",["Rama"]));

console.log(emitter.emit("Welcome"));


/* 
🔎 What Happens
We subscribed two callbacks to the "greet" event.
Each callback expects one argument: name.

When we call:
The array ["Arjun"] is spread into the callbacks.
So each callback receives name = "Arjun".

The result is:
[
  "Hello, Arjun!",
  "Welcome, Arjun, have a great day!"
]

🍕 Analogy
=============
Think of it like a birthday party announcement:
The event is "birthday".
You pass the person’s name as an argument (["Arjun"]).
All callbacks (friends) use that name to give personalized messages.

✨ Beginner Summary
====================
args lets you pass extra details to the callbacks.
In this example, the detail is "Arjun".
Each callback uses that detail to create a personalized message.

*/


/* 
Write unsubscribe() inside subscribe() ?

this is exactly the kind of detail that trips beginners up. Let’s unpack why unsubscribe() is written inside subscribe().

🧩 The Big Idea
================
When you call subscribe, you’re saying:
“Add my callback to the list of listeners for this event.”

But you also want a way to later say:
“Remove my callback from that list.”

So the subscribe() method returns an object that contains an unsubscribe() function. 
That way, the caller (you) can keep a handle to unsubscribe later.

🔎 Why put unsubscribe() inside subscribe()?
=============================================
Each subscription is unique.
When you subscribe, you’re adding your callback to the event’s list.
The unsubscribe() function needs to know which callback to remove.
By defining unsubscribe() inside subscribe(), it “remembers” the exact callback you passed in (thanks to closure in JavaScript).

🧑‍💻 Example
=============
const emitter = new EventEmitter();

const sub1 = emitter.subscribe("pizza", () => "Customer 1: Yum!");
const sub2 = emitter.subscribe("pizza", () => "Customer 2: Delicious!");

console.log(emitter.emit("pizza")); 
// ["Customer 1: Yum!", "Customer 2: Delicious!"]

sub1.unsubscribe();  // removes Customer 1’s callback

console.log(emitter.emit("pizza")); 
// ["Customer 2: Delicious!"]


Here:
======
sub1 has its own unsubscribe() that knows how to remove Customer 1’s callback.
sub2 has its own unsubscribe() that knows how to remove Customer 2’s callback.
If we wrote unsubscribe() outside, it wouldn’t know which callback to remove.

✨ Beginner Summary
=====================
subscribe() adds your callback and gives you a personal “unsubscribe button.”
That button is created inside subscribe() so it can remember your callback.
This works because of closures: functions in JavaScript can “remember” variables from the place they were created.

*/




/*

we can create unsubscribe() separately, but then we need a way to tell it which callback to remove. 

🔹 Current Approach (inside subscribe)
const sub1 = emitter.subscribe("pizza", () => "Customer 1: Yum!");
sub1.unsubscribe(); // removes only Customer 1’s callback

Here, unsubscribe() is created inside subscribe().
It remembers the exact callback you passed in (thanks to closures) so it knows which one to remove.


✨ Comparison
================
1) Inside subscribe():
Easier for beginners — you just call .unsubscribe() on the returned object.
Uses closures to remember the callback automatically.

2) Separate method:
More explicit — you must keep track of the callback yourself.
Slightly more code to manage, but sometimes clearer in big projects.
👉 So yes, you can create it separately, but the inside version is more beginner-friendly 
because you don’t have to remember which callback you passed in — the unsubscribe() already knows.

*/




/* 
🔹 Separate unsubscribe() Method
We could also design the class with a separate method:

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);
    return callback; // return the callback itself as a "token"
  }

  unsubscribe(eventName, callback) {
    if (!this.events.has(eventName)) return;
    const listeners = this.events.get(eventName);
    const idx = listeners.indexOf(callback);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  }

  emit(eventName, args = []) {
    if (!this.events.has(eventName)) return [];
    return this.events.get(eventName).map(cb => cb(...args));
  }
}


const emitter = new EventEmitter();

const cb1 = emitter.subscribe("pizza", () => "Customer 1: Yum!");
const cb2 = emitter.subscribe("pizza", () => "Customer 2: Delicious!");

console.log(emitter.emit("pizza")); 
// ["Customer 1: Yum!", "Customer 2: Delicious!"]

emitter.unsubscribe("pizza", cb1);

console.log(emitter.emit("pizza")); 
// ["Customer 2: Delicious!"]



*/


/* 

🔎 Where does listeners come from?
In the code, we didn’t declare listeners as a new array directly. Instead, we pulled it out of the Map:

const listeners = this.events.get(eventName);

this.events is a Map (like a dictionary).

Each event name (like "pizza") points to an array of callbacks.

So when we call .get(eventName), we’re retrieving that array.


Example:
this.events.set("pizza", []); // create an empty array for "pizza"


Later:
const listeners = this.events.get("pizza"); 
// listeners is now [] (an array)


🍕 Analogy
============
Think of this.events as a notebook:
Each page is labeled with an event name ("pizza").
On that page, you write a list of names (callbacks).
listeners is just the list on that page.
indexOf is how you find the exact name in the list before crossing it out.

✨ Beginner Summary
======================
We didn’t declare listeners as a new array — we retrieved it from the Map.
That array holds all the callbacks for a specific event.
indexOf helps us find the right callback in that array so we can remove it.

*/

