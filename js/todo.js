const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList  = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo() {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    newLi.appendChild(newSpan);
    newLi.appendChild(button);
    newSpan.innerText = newToDo;
    
    toDoList.appendChild(newLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

