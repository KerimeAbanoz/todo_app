//? tanımlamalar: input, buton, check, delete
const input = document.querySelector("#todo-input");
const button = document.querySelector("#todo-button");
const list = document.querySelector("#todo-ul");
const check = document.querySelector(".fa-check");
const trash = document.querySelectorAll(".fa-trash");

let total = 0;
// let completed = 0;
// const todoAdd = document.querySelector(".todo-add")

// todoAdd.innerHTML += `<h1>Total: ${total}</h1>`
// todoAdd.innerHTML += `<h1>Completed: ${completed}</h1>`

//! EVENTS

//? Button Event
button.addEventListener("click", () => {
  //? alert if the input is empty
  if (!input.value) {
    alert(`Please enter some plans`);
  } else {
    //? create a new plan
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: input.value,
    };
    //? add it to the dom
    createListElement(newTodo);
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

//? Focus Event
window.addEventListener("load", () => {
  input.focus();
});

const createListElement = (newTodo) => {
  //? create a new i element and give it the id of newTodo object
  const li = document.createElement("li");
  li.setAttribute("id", newTodo.id);

  //? create OK icon and appent it to li element
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? create p element which has the plan inside and append it to li element
  const p = document.createElement("p");
  const pText = document.createTextNode(newTodo.text);
  p.appendChild(pText);
  li.appendChild(p);

  //? create DELETE icon and appent it to li element and append DETELE icon to the li element
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  //? appent all to the list element
  list.appendChild(li);
};

//? Checked event
// console.log(check);
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-check")) {
    e.target.clasList.add("checked");
    console.log(e.target.parentElement.classList);
  }
});
// check.forEach(i => i.addEventListener("click", ()=>{
// i.parentElement.classList.add("checked")
// console.log(i.parentElement);
// }));

//? trash Event
//? ilgili planı kaldır
// çöp = queryAll(fa-trash)
// çöp.foreach(i) / i.onclick i.parent.remove
//? total -= 1
//? ekrana bas
