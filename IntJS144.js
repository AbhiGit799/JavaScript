
const user = {
    profile:{
        name:"A"
    }
}

const copy = {...user}

copy.profile.name="B";

console.log(user.profile.name); // B

/* 

... <- doing shallow copy.

Only Top level object get copy.

Nested object reference remain same.

*/










