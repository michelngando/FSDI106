
function start(){
    console.log("App started");
}

function init(){
    console.log("App initialized");
}

window.onload = init; //this wait for the DOM to be fully loaded before running init
//it waits ungtil the html and the css are fully loaded before running the init function
//not using the parenthesis stops the event from executing the fct "now"