// https://jsonplaceholder.typicode.com/posts/1

// https://jsonplaceholder.typicode.com/posts

async function apiCall() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
  } catch (error) {
    console.log(error.message);
    console.log("Please Try after some time.");
  }

  try {
    const url2 = "https://jsonplaceholder.typicode.com/posts";
    let response2 = await fetch(url2);
    response2 = await response2.json();
    console.log(response2);
  } catch (error) {
    console.log(error.message);
    console.log("Please Try after some time.");
  }finally{
    console.log("Close Loader");
  }


}

apiCall();
