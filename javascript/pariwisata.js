// clickable image functions
function goToSawit(){
    window.scroll(0,findPos(document.getElementById("sawit")));
}

function goToPendem(){
    window.scroll(0,findPos(document.getElementById("pendem")));
}

function goToGogik(){
    window.scroll(0,findPos(document.getElementById("gogik")));
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