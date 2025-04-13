
let create = document.getElementById("create");
let popup = document.getElementById("popup");
let submit = document.getElementById("submit");
let body = document.body;
let type
let date
let time
let checkboxCreate 
popup.style.display = "none";

let darkMode = document.getElementById("darkMode")
let lightMode = document.getElementById("darkMode")

create.onclick = function(){
    
    document.getElementById("type").value = null;
    date = document.getElementById("date").value = null;
    time = document.getElementById("time").value = null;


    popup.style.display = "";
}


submit.onclick = function(){

    popup.style.display = "none"
    type = document.getElementById("type").value;
    date = document.getElementById("date").value;
    time = document.getElementById("time").value;

    console.log(type)
    console.log(date)
    console.log(time)

    let checkboxContainer = document.getElementById("checkboxes")
   
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox"


    checkboxContainer.appendChild(newCheckbox)
    newCheckbox.style.backgroundColor = "red"
    newCheckbox.classList.add("checkbox")


  
}

darkMode.onclick = function(){
    darkMode.style.backgroundColor = "black"
    darkMode.style.borderColor = "white"
    darkMode.style.color = "white"
    body.style.backgroundColor = "black"
    body.style.color = "white"
}

