const a = {};
const b = {key:"B"}
const c = {key:"C"}

a[b] = 987;
a[c] = 123;


console.log(a); // { '[object Object]': 123 }
console.log(a[b]); // 123

/*

🔑 Key Concept: Object Keys in JS
==================================
In JavaScript, object property keys can only be strings or symbols.

When you use an object (b or c) as a key, JavaScript automatically converts it to a string using its toString() method.

For plain objects, {}.toString() returns "[object Object]".

⚙️ What Happens in Your Code
a[b] = 987;  
→ Internally becomes a["[object Object]"] = 987.

a[c] = 123;  
→ Internally becomes a["[object Object]"] = 123.

Since both keys are identical ("[object Object]"), the second assignment overwrites the first.



*/










