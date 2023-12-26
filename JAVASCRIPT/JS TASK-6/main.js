"use strict";

let img_box = document.querySelector(".slide_img");
let left = document.querySelector(".icon_left");
let right = document.querySelector(".icon_right");

const arr = [
  "photos/Screenshot (12).png",
  "photos/Screenshot (13).png",
  "photos/Screenshot (14).png",
  "photos/Screenshot (15).png",
];

let i = 0;

left.addEventListener("click", () => {
  i = (i - 1 + arr.length) % arr.length;
  img_box.setAttribute("src", arr[i]);
});

right.addEventListener("click", () => {
  i = (i + 1) % arr.length;
  img_box.setAttribute("src", arr[i]);
});
