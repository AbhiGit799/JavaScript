
/*

The Fetch API

The fetch API provides a fetch() method defined on the
window object, which you can use to perform requests.

This method returns a Promise that you can use to
retrieve the response of the request.

 */

fetch('https://jsonplaceholder.typicode.com/posts').then((apidata)=>{

console.log(apidata);

return apidata.json();

}).then((actualdata)=>{

    console.log(actualdata);

  //for catch example

  //console.log(actualdatas);

  

}).catch((er)=>{

console.log(`The actual error is ${er}`);

});






















