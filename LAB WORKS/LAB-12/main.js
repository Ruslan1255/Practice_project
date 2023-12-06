"use strict";

const openContentBtn = document.querySelectorAll(".main_box_item");
const content = document.querySelectorAll(".main_box_item_content");
console.log(openContentBtn);
openContentBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
