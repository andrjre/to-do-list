
let create = document.getElementById("create");
let popup = document.getElementById("popup");
let submit = document.getElementById("submit");
popup.style.display = "none";



create.onclick = function(){
    popup.style.display = "";
}

submit.onclick = function(){
    popup.style.display = "none"
}