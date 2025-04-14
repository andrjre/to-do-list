
let create = document.getElementById("create");
let popup = document.getElementById("popup");
let submit = document.getElementById("submit");
let body = document.body;
let type
let date
let time
let checkboxCreate
let wholeTask = document.getElementById("wholeTask")
let taskText = document.getElementById("taskText")
let taskName = document.getElementById("taskTime")
let taskTime = document.getElementById("taskTime") 
let edit = document.getElementById("edit")
popup.style.display = "none";
edit.style.display = "none"

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

    let checkboxes = document.getElementById("checkboxes")
    
   
    let newWholeTask = document.createElement("div")
    newWholeTask.id = "wholeTask"
    
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox"
    newCheckbox.style.backgroundColor = "black"
    
    let newTaskText = document.createElement("div")
    newTaskText.id = "taskText"

    let newTaskName = document.createElement("h1")
    newTaskName.id = "taskName"
    newTaskName.textContent = type;

    let newTaskTime = document.createElement("h2")
    newTaskTime.id = "taskTime"

    let newEdit = document.createElement("div")
    newEdit.id = "edit"

    if(document.getElementById("date").value === "" && document.getElementById("time").value === ""){
        console.log("gello empt")
        newTaskTime.textContent = ""
    }
    else{
        newTaskTime.textContent = (`${time} ${date}`);
    }

    //make unable to create blank task
    //make name required but not date and time
    edit.style.display = ""
    
    checkboxes.appendChild(newWholeTask)
    newWholeTask.appendChild(newCheckbox)
    newWholeTask.appendChild(newTaskText)
    newWholeTask.appendChild(edit)
    newTaskText.appendChild(newTaskName)
    newTaskText.appendChild(newTaskTime)
    newCheckbox.classList.add("checkbox")

    let arr = [type, date, time]
    console.log(arr)

    //need to make seperate arrays for each checkbox

}






let darkMode = document.getElementById("darkMode")
let lightMode = document.getElementById("darkMode")

darkMode.onclick = function(){
    darkMode.style.backgroundColor = "black"
    darkMode.style.borderColor = "white"
    darkMode.style.color = "white"
    body.style.backgroundColor = "black"
    body.style.color = "white"
}

