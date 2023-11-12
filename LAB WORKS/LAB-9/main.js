// const inventors = [
//   { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
//   { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
//   { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
//   { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
//   { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
//   { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
//   { first: "Max", last: "Planck", year: 1858, passed: 1947 },
//   { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
//   { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
//   { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
//   { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
//   { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
// ];

//------------------- TASK 1 -------------------
// Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's.
// let foundBirthYear=inventors.filter((item)=>item.year<1600 && item.year>=1500)
// console.log(foundBirthYear)

//------------------- TASK 2 -------------------
// Array.map()
// 2. Give us an array of the inventors first and last names.
// let fullName = inventors.map((item) => item.first + " " + item.last);
// console.log(fullName);

//------------------- TASK 3 -------------------
// Array.sort()
// 3. Sort the inventors by birthdate, oldest to youngest.
// let sortedInvertors = inventors.sort((a, b) => a.year - b.year);
// console.log(sortedInvertors);

//------------------- TASK 4 -------------------
// Array.reduce()
// 4. How many years did all the inventors live all together?
// let totalYear = inventors.reduce((acc, cur) => {
//   return acc + (cur.passed - cur.year);
// },0);
// console.log(totalYear)

//------------------- TASK 5 -------------------
// Array.every()
// 5. Did all inventors live at least 45 years?
// let minYear=inventors.every(item=>(item.passed-item.year)>=45)
// console.log(minYear)

//------------------- TASK 6 -------------------
// Array.some()
// 6. At least one inventor lived for 45 years?
// let val = inventors.some((item) => item.passed - item.year >=45 );
// console.log(val);




//------------------- TASK 7 -------------------
//       ALQORITM
// generateRange(2,10,2)==>[2,4,6,8,10]

// function generateRange(a, b, c) {
//   let result = [];
//   for (let i = a; i <= b; i += c) {
//     result.push(i);
//   }
//   return result;
// }

// let result = generateRange(2, 10, 2);
// console.log(result);
