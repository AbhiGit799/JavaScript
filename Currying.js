function add(a)
{
    return function(b)
    {
        return a+b
    }
}

console.log(add(10)(100));

function logs(level)
{
    return function(msg)
    {
        return "Info :"+level+" , msg "+msg
    }
}

console.log(logs("login")("user logged in successfully!!"))







