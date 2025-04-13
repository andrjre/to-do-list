
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

    let checkboxes = document.getElementById("checkboxes")
    let wholeTask = document.getElementById("wholeTask")
    let taskText = document.getElementById("taskText")
    let taskName = document.getElementById("taskTime")
    let taskTime = document.getElementById("taskTime")
   
    let newWholeTask = document.createElement("div")
    newWholeTask.id = "wholeTask"
    
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox"
    
    let newTaskText = document.createElement("div")
    newTaskText.id = "taskText"

    let newTaskName = document.createElement("h1")
    newTaskName.id = "taskName"
    newTaskName.textContent = type;

    let newTaskTime = document.createElement("h2")
    newTaskTime.id = "taskTime"
    newTaskTime.textContent = (`${time} on ${date}`);

    
    checkboxes.appendChild(newWholeTask)
    newWholeTask.appendChild(newCheckbox)
    newWholeTask.appendChild(newTaskText)
    newTaskText.appendChild(newTaskName)
    newTaskText.appendChild(newTaskTime)
    newCheckbox.classList.add("checkbox")

}

darkMode.onclick = function(){
    darkMode.style.backgroundColor = "black"
    darkMode.style.borderColor = "white"
    darkMode.style.color = "white"
    body.style.backgroundColor = "black"
    body.style.color = "white"
}

