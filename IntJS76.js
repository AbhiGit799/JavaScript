
const obj = {
    name:"Mohit",
    show:function(){
        console.log(this.name);
        setTimeout(()=>console.log(this.name),1000)
    }
}

obj.show();
/* 
Mohit
Mohit
*/

// Here, arrown fucntion is using surrounding this.
// As arrow function is not having its own this,

