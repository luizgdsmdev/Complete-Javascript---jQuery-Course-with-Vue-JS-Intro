


let captureClick = document.getElementById("click-me").onclick = function(){
    alert();
};

let mouseOver = document.getElementById("hover-me").onmouseover = function(){
    document.getElementById("hover-me").innerText = "Mouse is over the buttom.";
};

let mouseOff = document.getElementById("hover-me").onmouseout = function(){
    document.getElementById("hover-me").innerText = "mouse is no longer over me."
};
