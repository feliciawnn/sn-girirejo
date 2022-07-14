// Icon click to go scroll down
function scrollDown(){
    window.scroll(0,findPos(document.getElementById("abtTitle")));
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