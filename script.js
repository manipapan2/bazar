window.addEventListener('resize', maxheight);
var t1 = document.getElementById("tozih1");
var p1 = document.getElementById("p1");
var t2 = document.getElementById("tozih2");
var p2 = document.getElementById("p2");
var t3 = document.getElementById("tozih3");
var p3 = document.getElementById("p3");
var t4 = document.getElementById("tozih4");
var p4 = document.getElementById("p4");
var pi = document.getElementById("pi")
var pu = document.getElementById("pu")
var pup = document.getElementById("pup")
var dokme = document.getElementById("dokme")
var t1w = t1.offsetWidth * 1.5;
var t1h = t1.offsetHeight;
var t2w = t2.offsetWidth * 1.5;
var t2h = t2.offsetHeight;
var t3w = t3.offsetWidth * 1.5;
var t3h = t3.offsetHeight;
var t4w = t4.offsetWidth * 1.5;
var t4h = t4.offsetHeight;

//==================================
addEventListener("click",koko)


function maxheight() {
    console.log(t1.offsetWidth);
    
    
    if (t1w < t1h) {
    document.getElementById("divTozih").style.margin = "0";
    document.getElementById("chandTozih").style.justifyContent ="space-between";
    document.getElementById("chandTozih2").style.justifyContent ="space-between";
    t1.style.width = t1w + 50;
    t2.style.width = t2w + 50;
    t3.style.width = t3w + 50;
    t4.style.width = t4w + 50;
  }
  
  
  p1.style.maxHeight = t1.offsetHeight;

  p2.style.maxHeight = t2.offsetHeight;

  p3.style.maxHeight = t3.offsetHeight;

  p4.style.maxHeight = t4.offsetHeight;

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
    t1.style.boxShadow="0px 0px 0px 5px #F5DEBF"
    p1.style.fontSize="17"
    p1.style.borderRadius="15px"
    p1.style.height="100%"
    document.getElementById("pi").style.transform="rotateY(-180deg)"
    pu.style.transform="rotateY(0deg)"
    dokme.style.transition = "1s"
    dokme.style.transform="rotateY(-180deg)"
    pup.style.height="100%"
    pup.style.fontSize="17"
    pup.style.borderRadius="15px"
    setTimeout(() => {
      p1.style.display="none"
    }, "1000");
  }
}