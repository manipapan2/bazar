window.addEventListener('resize', maxheight);
var t1a = document.getElementById("t1a")
var t1 = document.getElementById("tozih1");
var p1 = document.getElementById("p1");
var pi = document.getElementById("pi")
var pu = document.getElementById("pu")
var pup = document.getElementById("pup")
var dokme = document.getElementById("dokme")
var dokmekam = document.getElementById("dokmekam")
var t1w = t1.offsetWidth * 1.5;
var t1h = t1.offsetHeight;
dokme.addEventListener("click",koko)
dokmekam.addEventListener("click",koko)
t1.addEventListener("mouseleave",() => {
  dokme.style.transition="0.3s"
})

//==================================


function maxheight() {
    console.log(t1.offsetWidth);
    
    
    if (t1w < t1h) {
    document.getElementById("divTozih").style.margin = "0";
    t1.style.width = t1w + 50;
  }
  
  
  p1.style.maxHeight = t1.offsetHeight;


  // dokme.style.marginLeft = t1.offsetWidth/2
}

maxheight();


function checknumber(xx){
  if(Number.isInteger(xx)){
    return "yes"
  }

  else{
    return "no"
  }
}



var tt = 1
function koko(){
  tt += 1
  tts = tt/2
  ttss = checknumber(tts)
  console.log(ttss)

  if(ttss == "yes"){
    t1.classList.remove("tozih")
    t1.classList.add("t1a")
    p1.style.borderRadius="15px"
    document.getElementById("pi").style.transform="rotateY(-180deg)"
    pu.style.transform="rotateY(0deg)"
    dokme.style.transition = "1s"
    dokme.style.transform="rotateY(-180deg)"
    pup.style.borderRadius="15px"
    t1.classList.remove("tozih")
    t1.classList.add("t1a")
  }


  if(ttss == "no"){
    t1.classList.remove("t1a")
    t1.classList.add("tozih")
    pi.style.transform="rotateY(0deg)"
    pu.style.transform="rotateY(180deg)"
    dokme.style.transition = "1000ms"
    dokme.style.transform="rotateY(0deg)"
  }
}