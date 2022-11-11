var t1 = document.getElementById("tozih1")
var p1 = document.getElementById("p1")
var t2 = document.getElementById("tozih2")
var p2 = document.getElementById("p2")
var t3 = document.getElementById("tozih3")
var p3 = document.getElementById("p3")
var t4 = document.getElementById("tozih4")
var p4 = document.getElementById("p4")
var t1w = t1.offsetWidth * 1.5
var t1h = t1.offsetHeight
var t2w = t2.offsetWidth * 1.5
var t2h = t2.offsetHeight
var t3w = t3.offsetWidth * 1.5
var t3h = t3.offsetHeight
var t4w = t4.offsetWidth * 1.5
var t4h = t4.offsetHeight
console.log(t1w)
console.log(t1h)
function maxheight(){
    
    //tozih1
    p1.style.maxHeight=t1.offsetHeight;
    // document.getElementById("an").style.width=document.getElementById("tozih1").offsetWidth
    // document.getElementById("an").style.height=document.getElementById("tozih1").offsetHeight
    if(t1w<t1h){
        // p1.style.fontSize="9"
        document.getElementById("divTozih").style.margin="0"
        document.getElementById("chandTozih").style.justifyContent="space-between"
        document.getElementById("chandTozih2").style.justifyContent="space-between"
        t1.style.width=t1w + 50
        t2.style.width=t2w + 50
        t3.style.width=t3w + 50
        t4.style.width=t4w + 50
    }
    // if(t2w<t2h){
    //     p2.style.fontSize="9"
    // }
    // if(t3w<t3h){
    //     p3.style.fontSize="9"
    // }
    // if(t4w<t4h){
    //     p4.style.fontSize="9"
    // }
    
    p2.style.maxHeight=t2.offsetHeight;
    
    p3.style.maxHeight=t3.offsetHeight;
    
    p4.style.maxHeight=t4.offsetHeight;
}

maxheight()

