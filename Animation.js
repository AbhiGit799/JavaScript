var intervalID = setInterval(Anim,1000)

var a = 0;

function Anim()
{
    a=a+20
    console.log(a);
    
    if(a==200){
      clearInterval(intervalID)
    }else{
    var target = document.getElementById('test')
    target.style.width=a+'px';
    target.style.marginLeft=a+'px';
    }

}









