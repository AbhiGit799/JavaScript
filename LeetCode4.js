// Counter II

const createCounter = function(init)
{
    let temp = arguments[0];
    return{
        increment:()=>++temp,
        decrement:()=>--temp,
        reset:()=>temp = init
    }
}

const counter = createCounter(10);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
console.log(counter.reset())

console.log("\n");

const cc = function(init){
    let temp = init;
    return{
        in:function increment(){
            return ++temp
        },
        de:function decrement()
        {
           return --temp;
        },
        re:function reset(){
          return  temp=init;
        }
    }
}

const a = cc(20);

console.log(a.in());
console.log(a.in());
console.log(a.in());
console.log(a.in());
console.log(a.in());

console.log(a.de());
console.log(a.de());
