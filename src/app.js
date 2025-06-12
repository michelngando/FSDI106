function saveTask() {
    console.log("Save button clicked");
    //get values from the form
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget);
    //build the task object
    let newTask = new Task(title, description, color, date, status, budget);
    console.log(newTask);
    //send the task object to the server


    //display the task into the UI/list section
    displayTask(newTask);
}

function displayTask(task){
    let taskHtml = `<div class="task">
            <h5>Today's task: ${task.title}</h5>
            <p>Description: ${task.description}</p>
            <p>Date: ${task.date}</p>
            <p>Status: ${task.status}</p>
            <p>Budget: ${task.budget}</p>`
    $(".get-list").append(taskHtml);
}


function init(){
    console.log("App initialized");
    //load data

    //hook events
    $("#btnSave").click(saveTask);
}

window.onload = init; //this wait for the DOM to be fully loaded before running init
//it waits until the html and the css are fully loaded before running the init function
//not using the parenthesis stops the event from executing the fct "now"