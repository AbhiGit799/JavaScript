
function Foo()
{
    this.value=100;
}

Foo.prototype.value=200;

Foo.value=300;

console.log(Foo.value); // 300

const f = new Foo()

console.log(f.value); //100  // because of new Foo()







