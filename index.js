
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
let remove = document.getElementById("remove")
let customize = document.getElementById("customize")
popup.style.display = "none";
edit.style.display = "none"
remove.style.display = "none"

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

    let newCustomize = document.createElement("div")
    newCustomize. id = "customize"

    let newEdit = document.createElement("div")
    newEdit.id = "edit"

    let newRemove = document.createElement("div")
    newEdit.id = "remove"


    if(document.getElementById("date").value === "" && document.getElementById("time").value === ""){
        newTaskTime.textContent = ""
    }
    else{
        newTaskTime.textContent = (`${time} ${date}`);
    }
    
    edit.style.display = ""
    remove.style.display = ""
    
    checkboxes.appendChild(newWholeTask)
    newWholeTask.appendChild(newCheckbox)
    newWholeTask.appendChild(newTaskText)
    newWholeTask.appendChild(newCustomize)
    newCustomize.appendChild(edit)
    newCustomize.appendChild(remove)
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

