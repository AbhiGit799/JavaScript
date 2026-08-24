// To Be or Not To Be

function expect(val)
{
    function toBe(x){
      if(x===val) return true;
      else throw new Error("Not Equal");
    }

    function notToBe(y)
    {
         if(y!==val) return true;
         else throw new Error("Equal")
    }

    return {toBe,notToBe}
}

console.log(expect(5).toBe(5))
console.log(expect(6).notToBe(6));
;








