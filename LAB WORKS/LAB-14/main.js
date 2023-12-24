"use strict";
// const hour = document.querySelector(".timer_hour");
// const minute = document.querySelector(".timer_minute");
// const second = document.querySelector(".timer_second");

// setInterval(()=>{
//   let now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   hour.innerText = padZero(hours);
//   minute.innerText = padZero(minutes);
//   second.innerText = padZero(seconds);
// }, 1000);

// function padZero(num) {
//   return (num < 10 ? '0' : '') + num;
// }

const input = document.querySelector(".lets_play_content_input");
const button = document.querySelector(".btn");
const guessCount = document.querySelector(".lets_play_content_guesses");
const guessedNumber = document.querySelector(
  ".lets_play_content_guessed_number"
);
const result = document.querySelector(".you_won");

let random = Math.floor(Math.random() * 100) + 1;
let numberArray = [];
let gussedOfNo = 0;

button.addEventListener("click", () => {
  button.innerText = "Guess";

  if (input.value > 100 || input.value <= 0) {
    alert("Please enter number between 1 and 100");
  } else {
    gussedOfNo++;
    numberArray.push(input.value);
  }
  if (input.value == random) {
    result.innerText = "Congrulations! You win!";
    guessCount.innerText = `NO. Of guesses ${gussedOfNo}`;
    guessedNumber.innerText = `The numbers was ${numberArray}`;
    result.style.color = "green";
    button.disabled = true;
  } else if (input.value < random) {
    result.innerText = "Guess higher number";
    guessCount.innerText = `NO. Of guesses ${gussedOfNo}`;
    guessedNumber.innerText = `The numbers was ${numberArray}`;
    result.style.color = "yellow";
  } else if (input.value > random) {
    result.innerText = "Guess lower number";
    guessCount.innerText = `NO. Of guesses ${gussedOfNo}`;
    guessedNumber.innerText = `The numbers was ${numberArray}`;
    result.style.color = "yellow";
  }

  if(gussedOfNo>=3){
    result.innerText = "Game over. You Lost!("
    result.style.color = "red";
    button.disabled=true
  }

  
});
