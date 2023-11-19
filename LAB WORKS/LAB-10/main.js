"use strict";

// TASK 1:
// 1.Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function getCalculate(arr) {
//   return arr.reduce((acc, curr) => acc * curr);
// }

// let myArray=[2,3,5,8,9,6]
// let result= getCalculate(myArray)
// console.log(result)

// TASK 2:
// 2.Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9
// const myArray = [ 2, 3, 4, 5];

// function getSquareSum(num) {
//   return num
//     .map((number) => number **2)
//     .reduce((acc, curr) => acc + curr, 0);
// }

// function getSquareSum(num) {
//   return num.reduce((acc, curr) => acc + curr ** 2,0);
// }

// let result = getSquareSum(myArray);
// console.log(result);

// TASK 3:
// 3.You get an array of numbers, return the sum of all of the positives ones.
// const arr = [1, -12, 2, -13, 3, 5, -11, -14, -15];
// function getPositiveSum(num) {
//   return num.reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);
// }

// let result = getPositiveSum(arr);
// console.log(result);

// TASK 4:
// 4.Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// const arr = ['hello', 'world', 'this', 'is', 'great']

// function makeSentence(words){
//   return words.join(' ')
// }

// let sentence= makeSentence(arr)
// console.log(sentence)

// TASK 5:
// 5.Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]

// let number = 35231;

// function getReverse(num) {
//   return String(num).split("").map(Number).reverse();
// }

// let result = getReverse(number);
// console.log(result);

// TASK 6:
// 6. You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

// function mergeArrays(arr1, arr2) {
//   let finalArray = arr1.filter((num) => !arr2.includes(num)).concat(arr2).sort((a, b) => a - b);
//   return finalArray;
// }

// let result1 = mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
// console.log(result1);

// let result2 = mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]);
// console.log(result2);

// let result3 = mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
// console.log(result3);
