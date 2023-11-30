"use strict";

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("close");
const cancelBtn = document.querySelector(".cancel_btn");
const confirmBtn = document.querySelector(".confirm_btn");
const myModal = document.querySelector(".modal");

openModalBtn.addEventListener("click", () => {
  myModal.classList.add("show_input");
});

closeModalBtn.addEventListener("click", () => {
  myModal.classList.remove("show_input");
});

cancelBtn.addEventListener("click", () => {
  myModal.classList.remove("show_input");
});

confirmBtn.addEventListener("click", () => {
  const element = document.getElementById("inputValue");
  const val = element.value;
  console.log(val);
  alert(val);
});
