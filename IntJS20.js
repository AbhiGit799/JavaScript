
// #15 String to Lowercase Without Built-in Function | JavaScript Interview Question #javascript

let info = "heLLO How are You?"

function convertInSmall(str)
{
    let result = ""
    
    for(let i=0;i<str.length;i++)
    {
        let code = str.charCodeAt(i);

        if(code>=65 && code <=90)
        {
           result+=String.fromCharCode(code+32)
        }else{
            result+=str[i]
        }


    }

    return result;
}

console.log(convertInSmall(info));

