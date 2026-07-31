// JS Interview Trick Asked in Accenture & Wipro 😳 #javascriptinterview #accenture #wipro

let input1 = ["name","age","email"];

let input2 = ["anil","29","anil12@email.com"]

// Create Object, wheren input1 array values will be key
//  input2 array values will be value

let obj = {};

function makeObject(arr1,arr2)
{
   for(i=0;i<=arr1.length;i++)
    {
      obj[arr1[i]] = arr2[i]
    } 
   
    console.log(obj);
    
}


makeObject(input1,input2)



