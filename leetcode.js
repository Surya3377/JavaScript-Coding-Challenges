//TWO SUM

// const twoSum = (array, goal) => {
//   let indexes = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === goal) {
//         indexes.push(i, j);
//       }
//     }
//   }
//   return indexes;
// };

// console.log(twoSum([1, 3, 55, 32, 12], 58)); // [1,2]

//2) Merge strings alternatively

// function mergeStringsAlternatively(str1, str2) {
//   let merge = "";
//   let maxStringsLength = Math.max(str1.length + str2.length);

//   for (let i = 0; i < maxStringsLength; i++) {
//     if (i < str1.length) {
//       merge += str1[i];
//     }

//     if (i < str2.length) {
//       merge += str2[i];
//     }
//   }
//   return merge;
// }
// console.log(mergeStringsAlternatively("ab", "pqrs"));

// 3) Removing duplicates in String with white spaces

// function reverseWordsInStrings(str) {
//   let reverseStr = str.trim();

//   return reverseStr.split(/\s+/).reverse().join(" ");
// }

// console.log(reverseWordsInStrings("the sky is blue"));
// console.log(reverseWordsInStrings("a good   example"));
// console.log(reverseWordsInStrings("  hello world  "));

// 4) Greatest Common Divisor

// function gcdOfStrings(str1, str2) {
//   if (str1 + str2 !== str1 + str2) {
//     return "";
//   }

//   const gcd = (a, b) => (b === 0 ? a : (b, a % b));

//   const length = gcd(str1.length, str2.length);
//   return str1.slice(0, length);
// }

// console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"
// console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"
// console.log(gcdOfStrings("LEET", "CODE")); // ""

// 5) Reverse Vowels

// function reverseVowels(s) {
//   const vowels = "aeiouAEIOU";
//   const arr = s.split(""); // convert string to array for swapping

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     // Move left pointer until it finds a vowel
//     while (left < right && !vowels.includes(arr[left])) {
//       left++;
//     }

//     // Move right pointer until it finds a vowel
//     while (left < right && !vowels.includes(arr[right])) {
//       right--;
//     }

//     // Swap vowels
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }

//   return arr.join(""); // convert back to string
// }

// console.log(reverseVowels("IceCreAm"));

// 6) Kids With the Greatest Number of Candies

// function kidsWithCandies(candies, extraCandies) {
//   let maxCandies = Math.max(...candies);
//   let result = [];

//   for (let i = 0; i < candies.length; i++) {
//     result.push(candies[i] + extraCandies >= maxCandies);
//   }

//   return result;
// }

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

// 7) canPlaceFlowers

// function canPlaceFlowers(flowerbed, n) {
//   let count = 0;

//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1]) {
//       flowerbed[i] = 1;
//       count++;
//     }
//   }

//   return count >= n;
// }

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
