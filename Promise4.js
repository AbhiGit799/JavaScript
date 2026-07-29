function userLogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                login: true,
                id: 100
            });
        }, 3000);
    });
}



function userToken() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                token: "112@!@!@#!#!#!#!!@!$$%^$^#$$@"
            });
        }, 1000);
    });
}


function handleLogin()
{
    const loginPromise = userLogin();
    loginPromise.then((result)=>{
        //console.log(result);
        if(result.login)
        {
            console.log("Go to profile page");
        }
        else
        {
            console.log("Try again");
        }
    }).catch((err)=>{
        console.log("Catch block executed!");
        console.log(err);
        
    })
}

 handleLogin()


function handleLoginPromiseAll()
{
    const loginPromise = userLogin();
    const tokenPromise = userToken();
    Promise.all([loginPromise,tokenPromise]).then(
        (result)=>{
            console.log(result);
        }
    )
}

// handleLoginPromiseAll()


function handleLoginPromiseRace()
{
    const loginPromise = userLogin();
    const tokenPromise = userToken();
    Promise.race([loginPromise,tokenPromise]).then(
        (result)=>{
            console.log(result);
        }
    )
}

// handleLoginPromiseRace()


function handleLoginPromiseAllSettled()
{
    const loginPromise = userLogin();
    const tokenPromise = userToken();
    Promise.allSettled([loginPromise,tokenPromise]).then(
        (result)=>{
            console.log(result);
        }
    )
}

// handleLoginPromiseAllSettled()






