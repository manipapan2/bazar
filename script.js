let p1 = document.getElementById("p1")
let t1 = document.getElementById("tozih1")
let mh = t1.offsetHeight

function maxheight(){
    document.getElementById("p1").style.maxHeight=document.getElementById("tozih1").offsetHeight
}

maxheight()
