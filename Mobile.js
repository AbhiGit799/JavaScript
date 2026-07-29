
//Example 1
// export default class Nokia
// {
//     vol()
//     {
//         console.log("Happy");
//     }
// }


// //export default Nokia;  //Syntax Example.


//Example 2

//Below Code is for Exporting Function.
// export default function show()
// {
//     console.log("Hello Module");
// }

//For exporting function we can also write like this

//export default show;


//Example 3 default export variable

// const a=10;

// export default a;


//Example 4 Name Export Class
//Use curly {} braces for Name Export Class

// export class Nameex
// {
//     A()
//     {
//         console.log("Name Export Happy");
//     }
// }

//export {Nameex}; //Alternative Way



//Example 5 Named Export Function

// export function Greet()
// {
//     console.log("Hi Good Morning");

// }

//Alternative Way  export {Greet};

//Example 6 Named Export Variable.

//export const a=1015;

//Alternative Way export{a};

//Example 7  Multiple Export Example.

class ABC
{

    Dis()
    {
        console.log("ABC Class");
    }

}

function fun()
{
    console.log("Fun Function");
}

export const x=909;


export {ABC,fun};


