// --------------- TASK 1 ---------------
// 1.Verilen sozun tersden yazilisini qaytar.

// function getReverse(word) {
//   let reverseWord = '';
//   for (let i = word.length - 1; i >= 0; i--) {
//     reverseWord += word[i];
//   }
//   return reverseWord;
// }

// let word = "Hello World";
// let reverseWord = getReverse(word);
// console.log(reverseWord);

// --------------- TASK 2 ---------------
// 2."Never give up" cumlesinde 'e' herfinin nece defe istifade olundugunu tapin.

// function find(sentence) {-

//   let findLetter = "e";
//   let index = 0;
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === findLetter) {
//       index++;
//     }
//   }

//   return index;
// }

// let sentence = "Never give up";
// let letterquantity = find(sentence);
// console.log(sentence + " " + "→" + " " + letterquantity);

// --------------- TASK 3 ---------------
// 3;4

// small car = 1-3 people
// medium car = 4-5 people
// large car = 6-9 people

// const cars = [
//   {
//     color: "red",
//     type: "Mercedes",
//     capacity: 5,
//     price: 120000,
//   },
//   {
//     color: "blue",
//     type: "BMW",
//     capacity: 2,
//     price: 70000,
//   },
//   {
//     color: "blue",
//     type: "Mercedes",
//     capacity: 4,
//     price: 220000,
//   },
//   {
//     color: "green",
//     type: "Ford",
//     capacity: 6,
//     price: 400000,
//   },
// ];

//  let vale= cars.map((car)=>{

//    if(car.capacity <=3){
//      return ` ${car.type} small`;
//    }
//    else if(car.capacity <=5){
//      return ` ${car.type} medium`;
//    }
//    else if(car.capacity<=9){
//      return `${car.type} large`
//    }
//    else "UNDEFINED"
//  })

// console.log(vale)

// --------------- TASK 4 ---------------
// 4.Rengi qirmizi olanlara 30% endirim et.

// function applyDiscount(car) {
//   car.price *= 0.7;
//   return car;
// }

// let discountedCars = cars.filter(function (car) {
//   return car.color === "blue";
// })
// .map(applyDiscount);

// console.log(discountedCars)

// --------------- TASK 5 ---------------
// 5.Mercedes markali masinda qiymet 200den bahadirsa 40%, ucuzdursa 30% endirim et.

// function applyDiscount(car) {
//   if (car.price < 200000) {
//     car.price *= 0.7;
//   } else {
//     car.price *= 0.6;
//   }
//   return car;
// }

// let selectedBrand = "BMW";
// let selectedCar = cars.find(function (car) {
//   return car.type === selectedBrand;
// })

// const mercedes=[]
// mercedes.push(selectedCar)

// const carmerc=mercedes.map(applyDiscount)


// console.log(carmerc);
