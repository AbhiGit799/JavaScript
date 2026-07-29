
//import Nokia from "./Mobile.js"; //Ex 1

//import show from "./Mobile.js"; //Ex 2

//import a from "./Mobile.js"; //Ex 3

//import {Nameex} from "./Mobile.js"; //Ex 4 //Named Export Class

//import {Greet} from "./Mobile.js"; //Ex 5

//import {a} from "./Mobile.js"; //Ex 6

import {ABC,fun,x} from "./Mobile.js";


//Alternative To import everything at once.

//import * as device from "./Mobile.js";

/*

for importing both named and default simultaneously.

import Nokia,{show,a} from "./Mobile.js";


here nokia class is default export.


* /


//Ex1
// const n=new Nokia();

// n.vol();


// console.log("Hello");

//Ex 2
//show();

//Ex 3
//console.log(a);

//Example 4  Named Export Class

// const n=new Nameex();

// n.A();

//Example 5 Named Export Function


//Greet();

//Ex 6

//console.log(a);

//Ex 7 Multiple Import Example.

console.log(x);

//console.log(device.a);

const obj=new ABC();

//const obj=new device.ABC();

obj.Dis();

fun();

//device.fun();






