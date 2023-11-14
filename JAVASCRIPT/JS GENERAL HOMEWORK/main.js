// #### Task 1: Function Basics
// 1.1 Create a function named `greetUser` that takes a user's name as an argument and prints a personalized greeting.

function greetUser(userName) {
  console.log(`Hello, ${userName}! Welcome!`);
}
greetUser("John");

// 1.2 Write a function `calculateArea` that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

function calculateArea(length, width) {
  return length * width;
}

let area = calculateArea(5, 8);
console.log(`The area of the rectangle is: ${area}`);

// 1.3 Implement a function `isEven` that checks if a given number is even. Return `true` if it is, otherwise `false`.

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// #### Task 2: Array Manipulation
// 2.1 Create an array named `fruits` containing at least five different fruit names. Write a function `displayFruits` that prints each fruit in the array.
let myArray = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

function displayFruits(fruitArray) {
  fruitArray.forEach((fruit) => {
    console.log(fruit);
  });
}

displayFruits(myArray);

// 2.2 Implement a function `reverseArray` that reverses the elements of an array. Test it with both numeric and string arrays.
function reverseArray(inputArray) {
  return inputArray.reverse();
}

let numericArray = [1, 2, 3, 4, 5];
console.log(reverseArray(numericArray));

let stringArray = ["apple", "banana", "orange", "grapes", "strawberry"];
console.log(reverseArray(stringArray));

// 2.3 Write a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
  return numbers.filter((i) => i % 2 === 0);
}

let myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(myArray2));

// #### Task 3: Object and Methods
// 3.1 Define an object `person` with properties `name`, `age`, and `city`. Write a function `displayPersonInfo` that prints the information in a readable format.
let person = {
  name: "John",
  age: 25,
  city: "New York",
};

function displayPersonInfo(object) {
  console.log(`Name: ${object.name}, Age: ${object.age}, City: ${object.city}`);
}

displayPersonInfo(person);

// 3.2 Extend the `person` object by adding a method `haveBirthday` that increments the age by 1 each time it's called.
const human = {
  name: "John",
  age: 25,
  city: "New York",
  haveBirthday: function () {
    this.age += 1;
  },
};

human.haveBirthday();
console.log(`New age: ${human.age}`);

// 3.3 Create an object `car` with properties `make`, `model`, and `year`. Write a method `displayCarInfo` that prints the car's information.
const car = {
  make: "MERCEDES-BENZ",
  model: "MAYBACH",
  year: 2022,
  displayCarInfo: function () {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};

car.displayCarInfo();

// #### Task 4: Advanced Array Methods
// 4.1 Create an array of numbers and use the `map` function to square each element. Print the resulting array.
const numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map((num) => num ** 2);

console.log(squaredNumbers);

// 4.2 Given an array of strings, use the `filter` function to create a new array containing only strings with more than 5 characters.
const strings = ["apple", "banana", "kiwi", "strawberry", "orange"];

let longStrings = strings.filter((str) => str.length > 5);

console.log(longStrings);

// 4.3 Write a function `calculateTotal` that takes an array of prices and uses the `reduce` function to calculate the total cost.
const prices = [10.99, 35.49, 23.67, 18.75];

function calculateTotal(price) {
  return price.reduce((acc, curr) => acc + curr, 0);
}

let totalCost = calculateTotal(prices);
console.log(`Total cost: $${totalCost.toFixed(2)}`);
