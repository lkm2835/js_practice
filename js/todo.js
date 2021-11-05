const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList  = document.getElementById("todo-list");

function paintToDo(newToDo) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    
    newLi.appendChild(newSpan);
    newSpan.innerText = newToDo;
    
    toDoList.appendChild(newLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);