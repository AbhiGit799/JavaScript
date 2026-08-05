

function memoizedAdd() {
  const cache = {};
  return function(a, b) {
    const key = `${a},${b}`;
    if (cache[key]) {
      console.log("Fetching from cache...");
      return cache[key];
    }
    console.log("Calculating...");
    cache[key] = a + b;
    return cache[key];
  };
}

const addFast = memoizedAdd();

console.log(addFast(2, 3)); // "Calculating..." → 5
console.log(addFast(2, 3)); // "Fetching from cache..." → 5











