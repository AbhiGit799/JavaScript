var Id = setTimeout(Anim,3000)

function Anim()
{
  var target = document.getElementById("test");
  target.style.width="500px";
  
}

function stopAnimation()
{
  clearTimeout(Id);
}







