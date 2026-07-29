/*

//Assign Events Using the HTML DOm

Syntax:

document.getElementById(Id).onclick=functionName;



*/

document.getElementById("f1").onclick=abc;

function abc()
{

document.getElementById("f1").style.backgroundColor="green";



}

/*

DOM addEvenListener() Method Syntax

Don't write on before event.

Syntax 1

document.getElementById(Id).addEvenListener("click",functionName);

Syntax 2

document.getElementById(Id).addEventListener("click",function(){

});

*/

document.getElementById("f2").addEventListener("click",abcd);

function abcd()
{
    document.getElementById("f2").style.backgroundColor="red";

}

document.getElementById("f2").addEventListener("mouseenter",function(){

document.getElementById("f2").style.border="10px solid blue";


})

























