
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
let taskContent = document.getElementById("taskContent")
popup.style.display = "none";

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

    
    // new edit pressed 
    // targets taskText within its taskContent parent element
    //converts the div to input type text


    newEdit.onclick = function(){
        console.log("edit")
    }
    newRemove.onclick = function(){
        console.log("remove")
    }
    // figure out how to use queryselector 









    let arr = [type, date, time]
    console.log(arr)

    //need to make seperate arrays for each checkbox

}


let darkMode = document.getElementById("darkMode")
let lightMode 
darkMode.onclick = function(){
    console.log("dark")
    darkMode.style.backgroundColor = "black"
    darkMode.style.borderColor = "white"
    darkMode.style.color = "white"
    body.style.backgroundColor = "black"
    body.style.color = "white"
    darkMode.id = "lightMode"

    let lightMode = document.getElementById("lightMode")

    lightMode.onclick = function(){
        console.log("glelo")
        lightMode.style.backgroundColor = "white"
        lightMode.style.borderColor = "black"
        lightMode.style.color = "black"
        darkMode.id = "darkMode"
    }
}

