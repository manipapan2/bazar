let p1 = document.getElementById("p1")
let t1 = document.getElementById("tozih1")
let mh = t1.offsetHeight

function maxheight(){
    document.getElementById("p1").style.maxHeight=document.getElementById("tozih1").offsetHeight
    
    document.getElementById("p2").style.maxHeight=document.getElementById("tozih2").offsetHeight
    
    document.getElementById("p3").style.maxHeight=document.getElementById("tozih3").offsetHeight
    
    document.getElementById("p4").style.maxHeight=document.getElementById("tozih4").offsetHeight
}

maxheight()
