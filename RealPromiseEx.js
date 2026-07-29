
// https://dummyjson.com/products

const url = "https://dummyjson.com/products"

const result = fetch("https://dummyjson.com/products")

//console.log(result); // this will also return a promise
// O/P => Promise { <pending> }

//result.then((response)=>console.log(response.json())) // this will return a promise
// O/P => Promise { <pending> }



result.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))



async function APIHandling()
{
    const url = "https://dummyjson.com/products"

    const apiresult = await fetch(url)

    let apidata = await apiresult.json()

    console.log(apidata);
    
}

APIHandling()






