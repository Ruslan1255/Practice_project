let country = prompt("Please enter country");
let capital;
switch (country) {
  case "Azerbaijan":
    capital = "Baku";
    break;
  case "Germany":
    capital = "Berlin";
    break;
  case "Japan":
    capital = "Tokyo";
    break;
  default:
     "Data is not defined";
    break;
}

alert("capital:" + capital);
