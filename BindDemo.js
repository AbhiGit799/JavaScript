/* 

bind() method binds this to a function and returns a new function

*/

const obj={
    name:"Anil Kumar",
    age:34,
    greet:function(){
        console.log(this.name);
        
    }
}

obj.greet() //Anil Kumar

const newObj = obj.greet;
newObj() //undefined

const trendobj = obj.greet.bind(obj)
trendobj() //Anil Kumar

const goobj = obj.greet
goobj.bind(obj)() //Anil Kumar



