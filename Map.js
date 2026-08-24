/*
The map() creates a new array with the results
of calling a function for every array element.

The map() method calls the provided function once
for each element in an array, in order.

Syntax

array.map(function(currentvalue,index,arr),thisValue)


 */

const oldarr=['vinod','aab','bc'];

console.log(oldarr[0]);

const newarr=oldarr.map(function(cvalue){

    return cvalue+"&&";

});


console.log(newarr);


console.log(oldarr);



const oarr=['vinod','aab','bc'];

console.log(oarr[0]);


const newr=oarr.map(function(cvalue,i,arr){

    console.log(arr); //Tells old array

    return i + ":"+cvalue+"thapa";

});


console.log(newr);


const studata=
[
    {
        id:1,
        name:"Jim",
        degree:"MCS"
    },

    {
        id:2,
        name:"Tom",
        degree:"BSC"
    },
    {
        id:3,
        name:"Vik",
        degree:"Btech"
    },



];


const newdata=studata.map((cvalue)=>{

return `My name is ${cvalue.name}`;

});


console.log(newdata);

//document.getElementById('showdata').innerHTML=newdata;




















