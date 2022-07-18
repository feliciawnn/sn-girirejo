// clickable image functions
function goToSawit(){
    window.scroll(0,findPos(document.getElementById("sawit")));
    console.log("sawit")
}

function goToPendem(){
    window.scroll(0,findPos(document.getElementById("pendem")));
    console.log('pendem')
}

function goToGogik(){
    window.scroll(0,findPos(document.getElementById("gogik")));
    console.log('gogik')
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}