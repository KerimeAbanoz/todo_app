//? tanımlamalar: input, buton, check, delete
const input = document.querySelector("#todo-input");
const button = document.querySelector("#todo-button");
const list = document.querySelector("#todo-ul");
const check = document.querySelector(".fa-check");
const trash = document.querySelectorAll(".fa-trash");

//? read the data from localStorage and turn it into an array
//? if there is null, give an empty array
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
console.log(todos)

let total = 0;
// let completed = 0;
// const todoAdd = document.querySelector(".todo-add")



//! ------------------ EVENTS ------------------

//? Button Event
button.addEventListener("click", () => {
  //? alert if the input is empty
  if (!input.value) {
    alert(`Please enter some plans`);
  } else {
    //? create a new plan
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      text: input.value,
    };
    //? add it to the dom
    createListElement(newTodo);
    //? push newTodo objtect to a todos
    todos.push(newTodo);
    //? add it to the localStorage as string because we are gonna turn it into an array
    localStorage.setItem("TODOS", JSON.stringify(todos));
    //? refresh the input area
    input.value = "";
    // add 1 to total
    total += 1;
    // console.log(total);
    //
  }
});

//? Enter Event
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    button.click();
  }
});

//? Load Event
window.addEventListener("load", () => {
  input.focus();

});

//? Checked and Delete Event
list.addEventListener("click", (e) => {
  //? if the event isfrom trash
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
  //? if the event is from check
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
  }
});

//! ------------------ Function Declerations ------------------

//? create new li for each plan
function createListElement(newTodo) {
  const { id, done, text } = newTodo; //? destr

  //? create a new i element and give it the id of newTodo object
  const li = document.createElement("li");
  li.setAttribute("id", id);

  //? create OK icon and appent it to li element
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? create p element which has the plan inside and append it to li element
  const p = document.createElement("p");
  const pText = document.createTextNode(text);
  p.appendChild(pText);
  li.appendChild(p);

  //? create DELETE icon and appent it to li element and append DETELE icon to the li element
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  //? appent all to the list element
  list.appendChild(li);

  //? check the newTodo if it's done is true, add checked class
  // done ? li.classList.add("checked") : ""
  done && li.classList.add("checked");
  console.log(li);
};


//? rendering each plan saved to the localStorage
const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};

renderSavedTodos()
