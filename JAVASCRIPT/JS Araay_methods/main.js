const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
// ***MAP***

// 1. Get the array of all names

// const allNames = persons.map((item) => item.name);
// console.log(allNames);

// 2. Get the array of all heights

// const allHeights = persons.map((item) => item.height);
// console.log(allHeights);

// 3. Get the array of objects with just name and height properties

// const allNameAndHeight = persons.map((item) => ({
//   name: item.name,
//   height: item.height,
// }));
// console.log(allNameAndHeight);

// 4. Get the array of all first names

// const allFirstNames = persons.map((item) => item.name.split(" ")[0]);
// console.log(allFirstNames);

// ***FILTER***

// 1. Get characters with a mass greater than 100

// let foundMass = persons.filter((item) => item.mass > 100);
// console.log(foundMass);

// 2. Get characters with a height of less than 200
// let foundHeight = persons.filter((item) => item.height < 200);
// console.log(foundHeight);

// 3. Get all male characters
// let foundGender = persons.filter((item) => item.gender === "male");
// console.log(foundGender);

// 4. Get all female characters
// let foundFemaleGender = persons.filter((item) => item.gender === "female");
// console.log(foundFemaleGender);

// ***SORT***

// 1. Sort by mass
// let sortMass = persons.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
// console.log(sortMass);

// 2. Sort by height
// let sortHeight = persons.sort(
//   (a, b) => parseInt(a.height) - parseInt(b.height)
// );
// console.log(sortHeight);

// 3. Sort by name
// let sortByName = persons.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByName);

// 4. Sort by gender
// let sortByGender = persons.sort((x, y) => x.gender.localeCompare(y.gender));
// console.log(sortByGender);

// ***EVERY***

// 1. Does every character have blue eyes?
// const foundBlueEyes = persons.every((person) => person.eye_color === "blue");
// console.log(foundBlueEyes);

// 2. Does every character have a mass of more than 40?
// const allMassGreaterThan40 = persons.every(
//   (person) => parseInt(person.mass) > 40
// );
// console.log(allMassGreaterThan40);

// 3. Is every character shorter than 200?
// const allShorterThan200 = persons.every(
//   (person) => parseInt(person.height) < 200
// );
// console.log(allShorterThan200);

// 4. Is every character male?
// const allMaleCharacters = persons.every((person) => person.gender === "male");
// console.log(allMaleCharacters);

// ***SOME***

// 1. Is there at least one male character?
// const hasMaleCharacter = persons.some((person) => person.gender === "male");
// console.log(hasMaleCharacter);

// 2. Is there at least one character with blue eyes?
// const hasCharacterWithBlueEyes = persons.some(
//   (person) => person.eye_color === "blue"
// );
// console.log(hasCharacterWithBlueEyes);

// 3. Is there at least one character taller than 210?
// const hasCharacterTallerThan210 = persons.some(
//   (person) => parseInt(person.height) > 210
// );
// console.log(hasCharacterTallerThan210);

// 4. Is there at least one character that has a mass of less than 50?
// const hasCharacterWithMassLessThan50 = persons.some(
//   (person) => parseInt(person.mass) < 50
// );
// console.log(hasCharacterWithMassLessThan50);
