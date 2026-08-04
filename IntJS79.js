//Closure Interview Trick
function outer()
{
    let count=0;
    return function inner()
    {
        count++;
        console.log(count);
    }
}

const fn1 = outer();
fn1()
fn1()

const fn2 = outer();
fn2()

/* 

1
2
1

*/


