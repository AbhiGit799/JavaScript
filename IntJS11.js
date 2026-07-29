// Print Nested Object Keys Using Recursion #javascript

const company = {
    name:"Tech Corp",
    department:{
        name:"Engineering",
        employees:{
            empId:101,
            role:'Frontend Developer',
            address:{
                city:"Noida",
                country:"India"
            }
        }
    }
}

function extract(obj)
{
    for(key in obj)
    {
        if(typeof obj[key]=="object")
        {
            extract(obj[key])
        }else{
            // console.log(key + ":" + obj[key]);
            console.log(key , ":" , obj[key]);
            
        }
        
    }
  
}


extract(company)


