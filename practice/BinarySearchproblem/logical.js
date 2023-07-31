//! Question :=> Reverse a String: Write a function that takes a string as input and returns the reversed version of the string.
//* Method 1
function reverseString(string) {
  let rString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    rString += string[i];
  }
  return rString;
}
//* Method 2
function reverseString2(string) {
  const rString = string.split("").reverse().join("");
  return rString;
}

console.log(reverseString("Akash"));
console.log(reverseString2("Akash"));

//! Question :=> Check Palindrome: Write a function that checks whether a given string is a palindrome (reads the same forwards and backwards).

function palindrome(string) {
  const rString = string.split("").reverse().join("");
  return rString === string;
}

console.log("Palindrome check",palindrome("Akash"));
console.log("Palindrome check",palindrome("SaaS"));

//! Question :=> Fibonacci Sequence: Write a function to generate the Fibonacci sequence up to a given number of terms.

function Fibonacci(limit) {
  let fibonacciSequence = [0, 1];
  for (let i = 2; i <= limit; i++) {
    let nextTerm = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
    fibonacciSequence.push(nextTerm);
  }
  return fibonacciSequence.join(",");
}

console.log("fibonacci check",Fibonacci(8));

//! Question :=>Factorial: Write a function to calculate the factorial of a given number.

function Factorial(number){
  let sum=number
  for (let i=number-1;i>0;i--){
    sum=sum*i
  }
  return sum
}
console.log("Factorial ",Factorial(5));

//! Question :=> Find the Missing Number: Given an array containing numbers from 1 to N, find the missing number in the sequence.

function findMissingNumber(arr) {
  var n = arr.length + 1; // Total number of elements in the sequence (including the missing number)
  var totalSum = (n * (n + 1)) / 2; // Sum of all numbers from 1 to N using the formula (N * (N + 1)) / 2 this also method for sum of real numbers
  var arrSum = arr.reduce((a, b) => a + b, 0); // Sum of the elements in the given array
  var missingNumber = totalSum - arrSum;
  return missingNumber;
}

// Example usage:
console.log("The missing number is:", findMissingNumber([1, 2, 4, 5, 3, 7]));

//! Question :=> Check for Prime Numbers: Write a function to check if a given number is prime.
function PrimeNumber(number) {
  return number % 2 === 0;
}

console.log("Prime Number",PrimeNumber(4));

//! Question :=> Find the Longest Word: Write a function that takes a sentence as input and returns the longest word in the sentence.

function longestWord(sentence) {
  let arraySentense = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < arraySentense.length; i++) {
    if (arraySentense[i].length > longestWord.length) {
      longestWord = arraySentense[i];
    }
  }
  return longestWord;
}
console.log(longestWord("Akash Akashh Akashh Akashhhsssh"));

//! Question :=> Count Characters: Write a function that counts the number of occurrences of each character in a string.

function CountChar(string) {
  const subString=string.toLowerCase()
  let countObj = {};
  for (let i = 0; i < string.length; i++) {
    if (countObj[subString[i]] === undefined) {
      countObj[subString[i]] = 0;
    }
    countObj[subString[i]] += 1;
  }
  console.log(countObj);
}
CountChar("AkasHhhh");
