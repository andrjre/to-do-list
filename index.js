let todoArray = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todoArray)

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

    let taskObject = {
        id: crypto.randomUUID(),
        name: type,
        date: date,
        time: time,
    }

    todoArray.push(taskObject)
    console.log(todoArray)
    localStorage.setItem("todos", JSON.stringify(todoArray))


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
        todoArray.splice(newWholeTask)
        console.log(todoArray)
    }

    newCheckbox.onclick = function(){
        if (newCheckbox.checked === true){
            console.log("checked")
            newWholeTask.style.opacity = "20%"
            newTaskText.classList.add("strikethrough")
            newEdit.style.pointerEvents = "none"
        }
        else{
            console.log("unchecked")
            newWholeTask.style.opacity = "100%"
            newEdit.disabled = false;
            newTaskText.classList.remove("strikethrough")
            newEdit.style.pointerEvents = ""
        }
    }
}

let darkModeStatus = false;

let popupDarkModeToggle = document.getElementById("popupDarkModeToggle")
let darkMode = document.getElementById("darkMode")
darkMode.textContent = "Dark mode"

darkMode.onclick = function(){
    let darkMode = document.getElementById("darkMode")
    darkModeStatus = true
    body.classList.toggle("darkModeToggle")
    popup.classList.toggle("popupDarkModeToggle")
    darkMode.classList.toggle("buttonDarkModeToggle")

    if(darkMode.textContent === "Dark mode"){
        darkMode.textContent = "Light mode"
    }
    else{
        darkMode.textContent = "Dark mode"
    }
}

//this is where i am working 



let renderTasks = function(){
    checkboxes.innerHTML = ""
    for(let i = todoArray.length - 1; i >= 0; i--){
        let oldTask = document.createElement("div")
        checkboxes.appendChild(oldTask)
   
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

        newTaskName.textContent = todoArray[i].name
        newTaskTime.textContent = todoArray[i].time

        newRemove.onclick = function(){
            newWholeTask.innerHTML = ""
            todoArray.splice(i,1)
            localStorage.setItem("todos", JSON.stringify(todoArray))
            console.log(todoArray)
        }
    }
}

renderTasks()