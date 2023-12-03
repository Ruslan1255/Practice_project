"use strict";
const password = document.querySelector(".form_box_password-input");
const form = document.querySelector(".form_box");
const tableBody = document.querySelector(".table_box tbody");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector(".form_box_name-input");
  const surnameInput = document.querySelector(".form_box_surname-input");

  const name = nameInput.value.trim();
  const surname = surnameInput.value.trim();
  const passwordValue = password.value;

  if (name === "" || surname === "" || passwordValue === "") {
    alert("Please fill in all fields.");
    return;
  }

  const newRow = tableBody.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.textContent = name;
  cell2.textContent = surname;

  nameInput.value = "";
  surnameInput.value = "";
  password.value = "";
});
