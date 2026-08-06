function recursiveCountdown(number)
{
    if(number<1) return;
    console.log(number);
    recursiveCountdown(number-1)
}

recursiveCountdown(-1)

recursiveCountdown(9)

