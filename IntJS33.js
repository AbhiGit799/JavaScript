var num=10

let fun=()=>{
    console.log(num); //undefined
    var num=20;
    console.log(num); //20
}

fun()
