//  TAPSIRIQ 1

// let country = prompt("Please enter country");
// let capital;
// switch (country) {
//   case "Azerbaijan":
//     capital = "Baku";
//     break;
//   case "Germany":
//     capital = "Berlin";
//     break;
//   case "Japan":
//     capital = "Tokyo";
//     break;
//   default:
//      "Data is not defined";
//     break;
// }

// alert("capital:" + capital);

//  TAPSIRIQ 2

// let second = parseInt(prompt("Enter a second"));
// let minute = Math.floor(second/60);
// let lastSecond = second % 60;
// alert(minute +"deqiqe"+ ""  + lastSecond + "saniye");

//  TAPSIRIQ 3 (IF ELSE)

// function getSum(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * getSum(number - 1);
//   }
// }

// let x = parseInt(prompt("Enter number"));
// let faktorial = getSum(x);
// alert(faktorial);

//  TAPSIRIQ 3 (FOR)

let x = parseInt(prompt("Enter number"));
let faktorial = 1;

for (let i = 1; i <= x; i++) {
  faktorial=faktorial * i;
}

alert(faktorial);
