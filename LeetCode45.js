/* 
2630. Memoize II

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. 
Instead it will return a cached value.

fn can be any function and there are no constraints on what type of values it accepts. 
Inputs are considered identical if they are === to each other.

 

*/

// function memoize(fn) {
// const cache = new Map();

//   return function(...args) {
//     let node = cache;
//     for (const arg of args) {
//       if (!node.has(arg)) node.set(arg, new Map());
//       node = node.get(arg);
//     }
//     if (!node.has('result')) {
//       node.set('result', fn(...args)); // store raw result
//     }
//     return node.get('result'); // return raw result
//   };
// }

function memoize(fn)
{
    const cache = new Map();

    return function(...args)
    {
        let node = cache;
        for(let arg of args)
        {
            if(!node.has(arg))
            {
                node.set(arg,new Map());
            }
            node = node.get(arg);
        }
        if(!node.has('result'))
        {
            node.set('result',fn(...args));
        }
        return node.get('result');
    }
}

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount = callCount + 1;
  return a + b;
});

memoizedFn(2, 3);
memoizedFn(2, 3);
console.log(callCount);
