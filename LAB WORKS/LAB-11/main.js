"use strict";

const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");
const addBtn = document.querySelector(".add_btn");

addBtn.addEventListener("click", () => {
  if (inputTask.value.trim() === "") {
    alert("Please fill the input");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.textContent = inputTask.value;

  const removeBtn = document.createElement("i");
  removeBtn.classList.add("fa-solid");
  removeBtn.classList.add("fa-times");


  const listBox = document.createElement("div");
  listBox.appendChild(taskItem);
  listBox.appendChild(removeBtn);

  taskList.appendChild(listBox);

  removeBtn.addEventListener("click", () => {
    listBox.remove();
  });

  inputTask.value = "";
});
