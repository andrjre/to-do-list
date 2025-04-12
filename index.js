
let create = document.getElementById("create");
let popup = document.getElementById("popup");
let submit = document.getElementById("submit");
let body = document.body;
let type = document.getElementById("type").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
popup.style.display = "none";

let darkMode = document.getElementById("darkMode")
let lightMode = document.getElementById("darkMode")
let modeDecide = 0

create.onclick = function(){
   
    popup.style.display = "";
    console.log(type)

    if(type.value == undefined){
        submit.style.background = "red"
    }
    
}

submit.onclick = function(){
    
    popup.style.display = "none"
   
}

darkMode.onclick = function(){
    darkMode.style.backgroundColor = "black"
    darkMode.style.borderColor = "white"
    darkMode.style.color = "white"
    body.style.backgroundColor = "black"
    body.style.color = "white"
    modeDecide = 1
}
