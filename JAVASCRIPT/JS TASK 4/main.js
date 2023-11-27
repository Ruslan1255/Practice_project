"use strict";

// TASK 1
// Write program that will reverse string: 'Hello world' => 'dlrow olleH'

// const str = "Hello World";

// function getReverse(word) {
//   let result = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     result += word[i];
//   }
//   return result;
// }

// let result=getReverse(str)
// console.log(result);

// TASK 2
// Write program to repeat every character in string 3 times: 'Hello world' => 'HHHeeellllllooo wwwooorrrlllddd!!!'

// const str = "Hello World";

// function repeatedLetters(word) {
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     for (let j = 0; j < 3; j++) {
//       result += word[i];
//     }
//   }
//   return result;
// }

// let result = repeatedLetters(str);
// console.log(result);

// TASK 3
// Write program to repeat given string n times: 'Hello world', 3 => 'Hello worldHello worldHello world'

// function repeatedLetters(word) {
//   let result = "";
//   for (let j = 0; j < 3; j++) {
//     for (let i = 0; i < word.length; i++) {
//       result += word[i];
//     }
//   }
//   return result;
// }

// let str = "Hello World";
// let result = repeatedLetters(str);
// console.log(result);

// TASK 4
// Write program to find the first not repeated character:

// const string = "abacddbec";

// function getFirstNotRepeated(str) {
//   for (let i = 0; i < str.length; i++) {
//     let repeated = false;
//     for (let j = 0; j < str.length; j++) {
//       if (i !== j && str[i] === str[j]) {
//         repeated = true;
//         break;
//       }
//     }
//     if (!repeated) {
//       return str[i];
//     }
//   }
//   return null;
// }

// let result=getFirstNotRepeated(string)

// console.log(result);

// TASK 5
// Write program to find the first repeated character: 'abacddbec' => 'a'

// function firstRepeatedChar(s) {
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[i] === s[j]) {
//         return s[i];
//       }
//     }
//   }
//   return null;
// }

// const result = firstRepeatedChar("abacddbec");
// console.log(result);

// TASK 6
// Write program to find the count of each character: 'abacddbec' => {a: 2, b: 2, c: 1, d: 3, e: 1}

// function countCharacters(string) {
//   const charCount = {};

//   for (const index in string) {
//     const char = string[index];

//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   return charCount;
// }

// const inputStr = 'abacddbec';
// const result = countCharacters(inputStr);
// console.log(result);

// TASK 7
// Write program that truncates string in a given length: 'Hello world', 5 => 'Hello...'

// function truncateString(s, length) {
//   if (s.length > length) {
//     let truncated = "";
//     for (let i = 0; i < length; i++) {
//       truncated += s[i];
//     }
//     return truncated + "...";
//   } else {
//     return s;
//   }
// }

// const result = truncateString("Hello world", 5);
// console.log(result);

// TASK 8
// Write program that truncates string in a given length, but it should not break the word: 'Hello world, nice talking to you', 20 => 'Hello world, nice...'

function truncateStringWithoutBreakingWord(sentence, length) {
  if (sentence.length > length) {
    let truncated = "";
    let currentLength = 0;

    for (let i = 0; i < sentence.length; i++) {
      truncated += sentence[i];
      currentLength++;

      if (currentLength === length) {
        // Check if the next character is a space or the last character
        if (sentence[i + 1] === " " || i === sentence.length - 1) {
          return truncated + "...";
        }
      }
    }
  }
  return sentence;
}

const result = truncateStringWithoutBreakingWord(
  "Hello world, nice talking to you",
  20
);
console.log(result);


