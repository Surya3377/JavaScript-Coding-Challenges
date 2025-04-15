// 1) Reverse a String

// function reverseString(str) {
//     return str.split("").reverse().join("");
//   let reverseStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return reverseStr;
// }

// console.log(reverseString("hello"));

// 2) Check for Palindrome
//  function palindromeCheck(str) {
//   let reverseStr = str.split("").reverse().join("");
//   if (reverseStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromeCheck("madam")); //output: true
// console.log(palindromeCheck("hello")); //output: false

// 3) Find the Maximum Number in an Array

// function maxNumber(arr) {
//     return Math.max(...arr);

//     let secondLargest = arr.sort((a, b) => b - a);
//     return secondLargest[1];

//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(maxNumber([1, 2, 3, 45, 54, 22]));

// 4) Sum of Array Elements

// function sumOfElements(arr) {
//   return arr.reduce((acc, cur) => acc + cur, 0);

//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//     return sum;

//   return sum / arr.length;
// }

// console.log(sumOfElements([1, 2, 3, 4, 5, 6]));

// 5) Factorial of a Number

// function sumOfElements(arr) {
//     return arr.reduce((acc, cur) => acc * cur, 1);

//   let factorial = 1;
//   for (let i = 1; i < arr.length; i++) {
//     factorial *= arr[i];
//   }

//   return factorial;
// }

// console.log(sumOfElements([1, 2, 3, 4, 5, 6]));

// 6) Check for Prime Number

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(8));

// 7)  print n number of prime numbers

// function primeNumbers(n) {
//   let primeNum = [];

//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       primeNum.push(i);
//     }
//   }
//   return primeNum;
// }

// console.log(primeNumbers(20));

// 8) Smallest Number in Array

// function smallestNum(n) {
//   let smallest = Infinity;
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] < smallest) {
//       smallest = n[i];
//     }
//   }

//   return smallest;
// }

// console.log(smallestNum([3, 55, 5, 443]));

// 9) Count Vowels in a String

// function countVowels(str) {
//   return str.match(/[aeiou]/gi).length;
// }

// console.log(countVowels("hello"));

// 10) Reverse an Array

// function reverseArray(arr) {
//     let word = arr[0];
//     return word.split("").reverse().join("");
//     return arr.reverse();

//     let word = arr;
//     let reverseArr = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//       reverseArr += word[i];
//     }
//     return reverseArr

//   const word = arr.map((el) =>
//     el.split(" ").map((el) => el.split("").reverse().join(""))
//   );
//   const words = word.join(" ");
//   return words.split(" ").reverse().join(" ")
// }

// console.log(reverseArray(["hello"]));
// console.log(reverseArray(["hello", "world"]));

// 11) Remove Duplicates from an Array

// function duplicates(arr) {
//   return [...new Set(str)].join(""); //for String
//   let word = arr[0]; //for Array
//   return [...new Set(word)].join("");
//   const set = arr.join(""); for Arrray of words
//   return [...new Set(set)].join("");
// }

// console.log(duplicates(["hellooeodo", "hello"]));

// 12) Find the Length of the Longest Word in a Sentence

// function longestWord(str) {
//   const words = str.split(" ");
//   return words.reduce((prev, lon) => (prev < lon ? lon : prev));//longest word
//   return words.reduce((prev, lon) => (prev > lon ? lon : prev)).length;//smallest word length
// }

// console.log(longestWord("hello from javascript!"));

// 13) Capitalize the First Letter of Each Word in a Sentence

// function longestWord(str) {
//   const words = str.split(" ");
//   console.log(words);
//   const capitalizeWord = words.map((el) => {
//     if (el.length > 0) {
//       return el.charAt(0).toUpperCase() + el.slice(1);
//     } else {
//       return "";
//     }
//   });

//   return capitalizeWord.join(" ");
// }

// console.log(longestWord("hello from javascript!"));

// 14) Merge Two Arrays and Remove Duplicates

// function mergeArrays(arr1, arr2) {
// two arrays
//   const merge = [...arr1, ...arr2].join("");
//   console.log(merge);
//   return [...new Set(merge)].join("");
//single array
//   return [...new Set(arr1)];
// }

// console.log(mergeArrays(["hello", "hello", "world"], ["world"]));

// 15) Intersection of Two Arrays

// function intersection(arr, arr1) {
//   const set = new Set(arr1);
//   return arr.filter((num) => set.has(num));
// }

// console.log(intersection([1, 2, 3, 4], [1, 2, 4]));

// 16) Generate Random Number within a given Range

// function randomNum(n) {
//   return Math.floor(Math.random() * n) + 1;
// }

// console.log(randomNum(100));

// 17) Check if a Given Year is a Leap Year

// function leapyear(n) {
//   return n % 2 === 0 ? true : false;
// }

// console.log(leapyear(2020));

// 18) Count the Occurrences of a Character in a String

// function countOccurence(arr, n) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOccurence([1, 2, 3, 4, 4, 4, 4, 5, 12, 1, 2], 4));

// 19) Reverse Words in a Sentence

// function reverseWords(str) {
//   const reverse = str.split(" ");
//   return reverse.reverse().join(" ");
// }

// console.log(reverseWords("hello from javascript"));

// 20) Find the Last Digit of a Number

// function lastDigit(arr) {
//   return arr.slice(-1).join(""); //last digit
// return arr.slice(-2, -1); //second last digit
//   return arr.slice(0, 1).join(""); //first digit
//   return arr.slice(1, 2).join(""); //second digit
// }

// console.log(lastDigit([1, 2, 3, 4, 55, 3, 33, 111]));

// 21) Convert an Object to an Array

// function objectToArray(obj) {
//   return Object.entries(obj);
//   return Object.keys(obj);
//   return Object.values(obj);
// }

// const person = {
//   name: "test",
//   age: 22,
//   mail: "test@gmail.com",
// };

// console.log(objectToArray(person));

// 22) Array to Object

// function arrayToObject(arr) {
//   return { ...arr };
//   return Object.fromEntries(arr);
// }

// const array = [
//   ["JS", "JavaScript"],
//   ["GFG", "GeeksforGeeks"],
// ];
// console.log(arrayToObject(array));

// 23) Find the First Non-Rep   eating Character in a String

// function missingNumber(arr) {
//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((acc, cur) => acc + cur, 0);

//   return expectedSum - actualSum;
// }

// console.log(missingNumber([1, 2, 4, 5, 6, 7]));

// 24) Find the First Non-Repeating Character in a String

// function nonRepeatingChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return str[i];
//     }
//   }
//   return null;
// }

// function missingOddNumber(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] !== 2) {
//       return arr[i] + 2;
//     }
//   }
//   return null;
// }

// console.log(missingOddNumber([3, 5, 7, 9, 11, 15, 17]));
// console.log(missingOddNumber([2, 4, 6, 10]));//even nums

// console.log(nonRepeatingChar("lleetcode"));

// 25) Find All Duplicates in an Array

// function allDuplicates(arr) {
//   let duplicates = new Set();
//   return arr.filter((num) => {
//     if (duplicates.has(num)) {
//       return true;
//     } else {
//       duplicates.add(num);
//       return false;
//     }
//   });
// }

// console.log(allDuplicates([1, 2, 3, 4, 5, 1, 24, 4,2]));

// 26) Check if Two Strings are Anagrams

// function angramCheck(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(angramCheck("mug", "gum"));

// 27) Find the Fibonacci Sequence up to N Terms

// function FibonacciSeq(n) {
//   let fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib;
// }

// console.log(FibonacciSeq(10));

// 28) Implement a Simple Calculator Function

// function calculator(cal) {
//   //   return eval(cal);

//   return new Function("return " + cal)();
// }

// console.log(calculator((2 * 5) / 2));

// 29) Check if Two Arrays are Equal

// function arraysEqual(arr1, arr2) {
//   return JSON.stringify(arr1) === JSON.stringify(arr2);
// }

// console.log(arraysEqual(["hello"], ["hello"]));

// 30) Rotate an Array to the Right by K Positions

// function rotateK(arr, k) {
//   const lastK = arr.slice(-k);
//   const firstPart = arr.slice(0, arr.length - k);

//   return [lastK, firstPart].join(",");

//   return arr.slice(-k).concat(arr.slice(0, arr.length - k));
// }

// console.log(rotateK([1, 2, 3, 4, 5], 2));

// 31) Find the Sum of All Even Numbers in an Array && Find the Sum of All Odd Numbers in an Array

// function sumOFEvenOdd(arr) {
//   const sum = arr.filter((num) => num % 2 === 2);//for Even
//   const sum = arr.filter((num) => num % 2 === 1);//for Odd

//   return sum.reduce((acc, cur) => acc + cur, 0);

//   let evenSum = 0;
//   let oddSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenSum += arr[i];
//     } else {
//       oddSum += arr[i];
//     }
//   }
//   return [evenSum, oddSum];
// }

// console.log(sumOFEvenOdd([1, 2, 3, 4, 5]));

// 32)Implement a Function to Remove a Specific Element from an Array

// function removeSpecificElement(arr, remove) {
//   return arr.filter((num) => num !== remove);
// }

// console.log(removeSpecificElement([1, 2, 3, 4, 55, 1, 2, 4, 31, 23], 1));

// 33)promises

// function promiseFunction() {
//   return new Promise((res, rej) => {
//     let person = true;
//     if (person) {
//       res("person identified");
//     } else {
//       rej("person not found");
//     }
//   });
// }

// promiseFunction().then((res) => console.log(res));

// Promise.all()

// const promise1 = Promise.resolve("promise 1 resolved");
// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("promise 2 resolved"), 200)
// );
// const promise3 = Promise.resolve("promise 3 resolved");
// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log("all promises resolved", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise4 = Promise.reject("Promise 4 rejected");

// Promise.all([promise1, promise2, promise4])
//   .then((results) => {
//     console.log("This will not run", results);
//   })
//   .catch((error) => {
//     console.log("At least one promise rejected:", error);
//   });

// Promise.allSettled()

// const promise1 = Promise.resolve("Promise 1 resolved");
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Promise 2 rejected"), 200)
// );
// const promise3 = Promise.resolve("Promise 3 resolved");

// Promise.allSettled([promise1, promise2, promise3]).then((results) => {
//   console.log(results);
// });

//Promise.race()

// const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "One"));
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "Two")
// );

// Promise.race([promise1, promise2])
//   .then((value) => console.log("Resolved:", value))
//   .catch((reason) => console.log("Rejected:", reason));

// const person = {
//     name :"jhon",
//     greet() {
//         setTimeout(() => {
//                     console.log(`Hello ${this.name}`)
//         })
//   }
// }

// person.greet()

// function sayHello () {
//     console.log(`hi my name is ${this.name}`)
// }

// const user = {name:"jhon"}

// sayHello.call(user)
// sayHello.apply(user)

// const boundFn = sayHello.bind(user)
// boundFn()

// call: invokes the function with a given this value.

// apply: same as call, but accepts arguments as an array.

// bind: returns a new function with this bound.
