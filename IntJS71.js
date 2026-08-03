
// var abc = "abc";

// function show()
// {
//     abc = "xyz";
//     return;
//     function abc(){}
// }

// show();
// console.log(abc); // abc  

// Here, in above code Hoisting working 

var abc = "abc";

function show()
{
    abc = "xyz";
    return;
    // function abc(){}
}

show();
console.log(abc); //xyz










