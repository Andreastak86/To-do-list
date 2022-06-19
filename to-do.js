const toDoInput = document.querySelector("#myInput");

document.querySelector("#subBtn").addEventListener("click", () => {
  toDoInput.focus();
  addToDo();
});

document.querySelector("#subBtn").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // code for enter
  }
  console.log("keydown");
});

const elem = document.getElementById("subBtn");

//I google this one, and get it to work after x amount of time;-)
let input = document.getElementById("myInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("subBtn").click();
  }
});

document.querySelector("#deleteBtn").addEventListener("dblclick", () => {
  const allLiElements = document.querySelectorAll("li");
  allLiElements.forEach((li) => li.remove());
});

function addToDo() {
  if (toDoInput.value.match(/^ *$/)) return;

  const li = document.createElement("li");
  const p = document.createElement("p");
  const button = document.createElement("button");

  p.textContent = toDoInput.value;
  button.textContent = "DELETE";
  button.classList.add("btn", "delete-btn");

  button.addEventListener("dblclick", () => li.remove());

  li.append(p, button);
  document.querySelector("ol").append(li);
  toDoInput.value = "";
}
