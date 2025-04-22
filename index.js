
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
let taskName = document.getElementById("taskName")
let taskTime = document.getElementById("taskTime") 
let taskContent = document.getElementById("taskContent")
popup.style.display = "none";
let button = document.getElementById("submit")

let isEditing = false;
let taskBeingEdited = null;

create.onclick = function(){
    
    document.getElementById("type").value = null;
    date = document.getElementById("date").value = null;
    time = document.getElementById("time").value = null;
    popup.style.display = "";
    popupTitle.innerHTML = "Create a new task!"
    button.innerHTML = "Submit"
    let submit = document.getElementById("submit");
    button.id = "submit"

}


submit.onclick = function(){
    
    button.id = "submit"

    type = document.getElementById("type").value;
    date = document.getElementById("date").value;
    time = document.getElementById("time").value;

    if (isEditing && taskBeingEdited) {
        taskBeingEdited.nameElem.textContent = type;
        taskBeingEdited.timeElem.textContent = `${time} ${date}`;

        isEditing = false;
        taskBeingEdited = null;
        popup.style.display = "none";
        return;
    }
    
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
    newCheckbox.checked = false
    
   
    let newTaskText = document.createElement("div")
    newTaskText.id = "taskText"

    let newTaskName = document.createElement("h1")
    newTaskName.id = "taskName"
    newTaskName.textContent = type;

    let newTaskTime = document.createElement("h2")
    newTaskTime.id = "taskTime"

    let newCustomize = document.createElement("div")
    newCustomize.classList.add("customize") 

    let newEdit = document.createElement("div")
    newEdit.classList.add("edit")

    let newRemove = document.createElement("div")
    newRemove.classList.add("remove")

    let newTaskContent = document.createElement("div")
    newTaskContent.id = "taskContent" 

    if(document.getElementById("date").value === "" && document.getElementById("time").value === ""){
        newTaskTime.textContent = ""
    }
    else{
        newTaskTime.textContent = (`${time} ${date}`);
    }
    
    newEdit.textContent = "Edit"
    newRemove.textContent = "Remove"
    
    checkboxes.appendChild(newWholeTask)
    newWholeTask.appendChild(newCheckbox)
    newWholeTask.appendChild(newTaskContent)
    newTaskContent.appendChild(newTaskText)
    newTaskContent.appendChild(newCustomize)
    newCustomize.appendChild(newEdit)
    newCustomize.appendChild(newRemove)
    newTaskText.appendChild(newTaskName)
    newTaskText.appendChild(newTaskTime)
    newCheckbox.classList.add("checkbox")

    let arr = [type, date, time]
    console.log(arr)

    newEdit.onclick = function(){

        popup.style.display = "";
        popupTitle.innerHTML = "Edit this task";
        button.innerHTML = "Edit";
    
        document.getElementById("type").value = newTaskName.textContent;
        document.getElementById("date").value = date;
        document.getElementById("time").value = time;
    
        isEditing = true;
        taskBeingEdited = {
            nameElem: newTaskName,
            timeElem: newTaskTime
        };
    }

    newRemove.onclick = function(){
        newWholeTask.innerHTML = ""
        arr = []
        console.log(arr)
    }

    newCheckbox.onclick = function(){
        if (newCheckbox.checked === true){
            console.log("checked")
            newWholeTask.style.opacity = "20%"
            newTaskText.classList.add("strikethrough")
        }
        else{
            console.log("unchecked")
            newWholeTask.style.opacity = "100%"
            newTaskText.classList.remove("strikethrough")
        }
    }

}



let popupDarkModeToggle = document.getElementById("popupDarkModeToggle")
let darkModeToggle
let darkMode = document.getElementById("darkMode")

darkMode.onclick = function(){
    body.classList.toggle("darkModeToggle")
    popup.classList.toggle("popupDarkModeToggle")
}

