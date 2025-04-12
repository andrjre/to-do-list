
let create = document.getElementById("create");
let popup = document.getElementById("popup");
let submit = document.getElementById("submit");
let body = document.body;
let type
let date
let time
popup.style.display = "none";

let darkMode = document.getElementById("darkMode")
let lightMode = document.getElementById("darkMode")

create.onclick = function(){
    popup.style.display = "";
}


if(document.getElementById("type").value !== "0"){
    console.log("nooo")
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.backgroundColor = "green"
}
if(document.getElementById("type").value == "0"){
    console.log("gello")
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.backgroundColor = "red"
}
//somethign weird with this bit 


submit.onclick = function(){

    popup.style.display = "none"
    type = document.getElementById("type").value;
    date = document.getElementById("date").value;
    time = document.getElementById("time").value;

    

    console.log(type)
    console.log(date)
    console.log(time)

    document.createElement("div")
}

darkMode.onclick = function(){
    darkMode.style.backgroundColor = "black"
    darkMode.style.borderColor = "white"
    darkMode.style.color = "white"
    body.style.backgroundColor = "black"
    body.style.color = "white"
}

