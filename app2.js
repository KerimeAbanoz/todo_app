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
    //? or add the plan
    list.innerHTML += `<li class="ker"><i class="fa-solid fa-check"></i>${input.value}<i class="fa-solid fa-trash"></i></li>`;
    // add 1 to total
    total += 1;
    // console.log(total);
    //
    input.value = "";
  }
});

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
