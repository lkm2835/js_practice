const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList  = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDoObject) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    newLi.id = newToDoObject.id;
    newSpan.innerText = newToDoObject.text;

    newLi.appendChild(newSpan);
    newLi.appendChild(button);
    
    toDoList.appendChild(newLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}