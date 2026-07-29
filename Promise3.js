document.write(
    unescape("%3Cscript src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
  );


  function prom(complete)
  {
  
  return new Promise(function(resolve,reject)
  {
  
  console.log("Fetching Data, Please Wait");
  
  setTimeout(() => {
  
     $.get("https://jsonplaceholder.typicode.com/posts",function(data){


        console.log(data);

     }).fail(err=>{

        reject("Fail to load JSON");

     })
  
      
  }, 2000);
  
  
  
     
  });
  
  
  }


  prom().then((result)=>{

    console.log(result);
}).catch((wrong)=>{

    console.log(wrong);

});





