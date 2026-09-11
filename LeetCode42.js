const listeners = [(name) => "Hello " + name, (name) => "Welcome " + name];

const args = ["Arjun"];
const results = [];

for (const cb of listeners) {
  results.push(cb(...args));
}

console.log(results);

const r = [];
for(const a of listeners)
{
   r.push(a());
}
console.log(r);

/* 
🔎 Step by Step
1) listeners
This is an array of all the callbacks (functions) subscribed to a particular event.
Example:
listeners = [
  (name) => "Hello " + name,
  (name) => "Welcome " + name
];

2) for (const cb of listeners)
This means: “Go through each callback (cb) in the listeners array, one by one.”

3) cb(...args)
cb is a function.
...args spreads the arguments array into the function.
Example: if args = ["Arjun"], then cb(...args) becomes cb("Arjun").

4) results.push(cb(...args))
Run the callback with the arguments.
Take whatever it returns and add it to the results array.

*/
