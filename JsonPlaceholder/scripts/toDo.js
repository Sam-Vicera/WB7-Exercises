document.addEventListener("DOMContentLoaded", () => {

    let submitButton = document.getElementById("submitButton")
    submitButton.addEventListener("click" , messageText);

})

function messageText(){
    let numberField = document.getElementById("numberField").value
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${numberField}`)
    .then(response => response.json())
    .then(todo => {
        displayInformation(todo)
    } )
    
}

function displayInformation(todo){
let displayedInfo = document.getElementById("info")
    displayedInfo.innerText = "";

    let userId = document.createElement("p")
    userId.innerText = todo.userId
    displayedInfo.appendChild(userId);

    let Id = document.createElement("p")
    Id.innerText = todo.id
    displayedInfo.appendChild(Id);
    
    let title = document.createElement("p")
    title.innerText = todo.title
    displayedInfo.appendChild(title);
    
    let status = document.createElement("p")
    status.innerText = todo.completed
    displayedInfo.appendChild(status);



}