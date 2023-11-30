"use strict";

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("close");
const cancelBtn = document.querySelector(".cancel_btn");
const confirmBtn = document.querySelector("confirm_btn");
const showInput = document.querySelector(".modal");

openModalBtn.addEventListener("click", () => {
  showInput.classList.add("show_input");
});

confirmBtn = addEventListener("click", () => {
  let inputElement = document.getElementById("yourInputId");
  let value = inputElement.value;
  console.log(value);
  alert(value);
});

closeModalBtn.addEventListener("click", () => {
  showInput.classList.remove("show_input");
});

cancelBtn.addEventListener("click", () => {
  showInput.classList.remove("show_input");
});
