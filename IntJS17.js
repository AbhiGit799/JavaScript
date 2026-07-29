// #12 JavaScript Interview Question | Optional Chaining & Nullish Coalescing | JS Shorts #jsshorts


const user = {
    name:"Rahul",
    address:{
        city:"Delhi"
    }
}

console.log(user?.address?.city);

const user1 = {
    name:"Rahul",
    // address:{
    //     city:"Delhi"
    // }
}

console.log(user1?.address?.city); //No error, it will give undefined.

const user2={
    name:"RK",
    address:{
       //city:"Delhi"
    }
}

console.log(user2?.address?.city??"something went wrong");

