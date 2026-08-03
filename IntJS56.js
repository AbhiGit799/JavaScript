const user = {
    name:"Mohit Decodes",
    age:21,
    email:"test12@gmail.com",
    company:"HCL Technologies"
}

const jsonString = JSON.stringify(user);

console.log(jsonString);


/* 

JSON.stringify() is a built-in JavaScript method that converts a JavaScript value (like an object or array) into a JSON-formatted string. It’s super handy when you need to send data over a network (like in an API request) or store it in a file.


✨ Key Uses
=============
Object to JSON: Turns objects into JSON strings.

Array to JSON: Converts arrays into JSON strings.

API requests: Ensures data is properly formatted before sending.

LocalStorage: Saves structured data as strings.


*/

const userjson = JSON.parse('{"name":"Mohit Decodes","age":21,"email":"test12@gmail.com","company":"HCL Technologies"}');

console.log(userjson);

/* 

JSON.parse() is the opposite of JSON.stringify(). It takes a JSON-formatted string and converts it back into a JavaScript object or array.

✨ Key Uses

Parse API response: Convert JSON strings received from servers into usable objects.

Read LocalStorage: Retrieve stored JSON strings and turn them back into objects.

Config files: Load structured data from .json files.

*/





