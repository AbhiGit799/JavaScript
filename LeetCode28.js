/*

The LeetCode problem 2622. Cache With Time Limit asks you to build a special cache (temporary storage) 
where each key-value pair automatically expires after a set time. 
You must implement three methods: set, get, and count. 
The challenge is to handle expiration correctly while keeping track of active keys.

🗂️ Problem Summary
===================
Goal: Create a class TimeLimitedCache that stores key-value pairs with expiration times.

Methods:
set: Add/update a key with a value and duration (in ms).
Returns true if the key already exists and is still valid.
Returns false if it’s new or expired.

get: Retrieve the value if the key is still valid, otherwise return -1.

count: Return the number of currently valid (unexpired) keys.


🔹 Beginner-Friendly Example

Example 1
==========
actions = ["TimeLimitedCache", "set", "get", "count", "get"]
values  = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]

At t=0: Create cache.
At t=0: set(1, 42, 100) → false (new key).
At t=50: get(1) → 42 (still valid).
At t=50: count() → 1 (one active key).
At t=100: key expires.
At t=150: get(1) → -1 (expired).

Output: [null, false, 42, 1, -1]


🔹 Why This Matters
=====================
This type of cache is useful in real-world scenarios like:
Session management: Auto-expiring user sessions.
Temporary offers: Limited-time discounts in e-commerce.
API rate limiting: Tracking requests within a time window.


⚡ Key Beginner Takeaways
===========================
Think of it like a fridge with expiry dates: once the time passes, the item is thrown out.
Use Map (or dictionary) to store values.
Use setTimeout in JavaScript (or similar timers in other languages) to auto-delete expired keys.
Always check expiry before returning values.


*/

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const exists =
      this.cache.has(key) && this.cache.get(key).expiry > Date.now();
    this.cache.set(key, {
      value,
      expiry: Date.now() + duration,
    });

    return exists;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const entry = this.cache.get(key);

    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return -1;
    }
    return entry.value;
  }

  count() {
    let valid = 0;
    for (const [key, entry] of this.cache) {
      if (Date.now() <= entry.expiry) {
        valid++;
      } else {
        this.cache.delete(key);
      }
    }
    return valid;
  }
}


const cache = new TimeLimitedCache();

// Step 1: set(1, 42, 100)
console.log(cache.set(1, 42, 100)); // returns false (new key)

// Step 2: get(1) after 50ms
console.log(cache.get(1)) // returns 42 (still valid)

// Step 3: count() after 50ms
console.log(cache.count()) // returns 1 (one valid key)

// Step 4: get(1) after 150ms
console.log(cache.get(1)) // returns -1 (expired)


