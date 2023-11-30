"use strict";
document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById('openModalBtn');
  const modal = document.getElementById('myModal');
  const closeModalBtn = document.querySelector('.close');
  const cancelBtn = document.querySelector('.cancelBtn');
  const confirmBtn = document.getElementById('confirmBtn');
  const inputValue = document.getElementById('inputValue');

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  cancelBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  confirmBtn.addEventListener('click', function () {
    const inputText = inputValue.value;
    console.log('Input Value:', inputText);
    alert('Input Value: ' + inputText);
    modal.style.display = 'none';
  });
});
