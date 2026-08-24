// Cache With Time Limit.

/* 

The “Cache With Time Limit” problem on LeetCode (Problem 2622) asks you to implement a cache that 
stores key-value pairs with expiration times. 

In JavaScript, you solve it by using a Map to store values along with their expiration timestamps 
and clearing expired entries when accessed.

Problem Summary
set(key, value, duration)  
Stores a key-value pair with a time limit (duration in ms).
Returns true if the key already exists and is unexpired, otherwise false.
If the key exists, overwrite both value and duration.

get(key)  
Returns the value if the key is unexpired, otherwise -1.

count()  
Returns the number of unexpired keys.


Key Considerations
===================
1) Use setTimeout to automatically delete expired keys.
2) Clear old timeouts when overwriting keys to avoid memory leaks.
3) Check expiration on every get and count call to ensure correctness.



*/

class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const exists = this.cache.has(key) && this.cache.get(key).expiry > Date.now();

        if (exists) {
            clearTimeout(this.cache.get(key).timeout);
        }

        const timeout = setTimeout(() => {
            this.cache.delete(key);
        }, duration);

        this.cache.set(key, {
            value,
            expiry: Date.now() + duration,
            timeout
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
        let active = 0;
        const now = Date.now();
        for (const [key, entry] of this.cache.entries()) {
            if (entry.expiry > now) active++;
            else this.cache.delete(key);
        }
        return active;
    }
}


const cache = new TimeLimitedCache();

console.log(cache.set(1, 42, 100)); // false (new key)
console.log(cache.get(1));          // 42 (before expiry)
console.log(cache.count());         // 1
setTimeout(() => console.log(cache.get(1)), 150); // -1 (expired)











