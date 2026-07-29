
const obj={
    value:0,
    add(a)
    {
     this.value+=a
     return this
    },
    sub(a)
    {
      this.value-=a
      return this
    },
    mul(a)
    {
      this.value*=a
      return this
    },
    print()
    {
       return this.value
    }
}

console.log(obj.add(10).sub(5).mul(4).print());










