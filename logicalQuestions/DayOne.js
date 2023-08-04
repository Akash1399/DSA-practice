// Write a function that checks if a given number is even or odd.
function checkEven(number) {
  return number % 2 === 0;
}
console.log(checkEven(1));

// Implement a function to find the maximum and minimum values in an array.
function findMinMax(array) {
  if (array.length < 2) {
    return array.length === 1 ? [array[0]] : null;
  } else {
    array.sort((a, b) => a - b);
    return [array[0], array[array.length - 1]];
  }
}
console.log(findMinMax([1]));
// Write a function that calculates the sum of all numbers from 1 to n.
function sumOfNumbers(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumOfNumbers(3));

// Implement a function that counts the number of vowels in a given string.
function countVowels(string) {
  const result = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let n of string) {
    switch (n) {
      case "a" || "A":
        result["a"] += 1;
    }
    switch (n) {
      case "e" || "E":
        result["e"] += 1;
    }
    switch (n) {
      case "i" || "I":
        result["i"] += 1;
    }
    switch (n) {
      case "o" || "O":
        result["o"] += 1;
    }
    switch (n) {
      case "u" || "U":
        result["u"] += 1;
    }
  }
  return result;
}
console.log(
  countVowels(
    " function tht returns the Fiboncci sequence up to  given number of t"
  )
);
// Write a function that returns the Fibonacci sequence up to a given number of terms.
function fibonacciSequence(number) {
  let result = [0, 1];
  for (let i = 2; i < number; i++) {
    let nextNumber = result[i - 2] + result[i - 1];
    result.push(nextNumber);
  }
  return result;
}
console.log(fibonacciSequence(6));

// Implement a function that checks if a given string is a valid email address.

// Write a function to reverse the order of words in a sentence.

function reverseWord(string) {
  let reverseSentence = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseSentence += string[i];
  }
  let reversedSentenceArray = reverseSentence.split(" ");
  let result = [];
  for (let i = reversedSentenceArray.length - 1; i >= 0; i--) {
    result.push(reversedSentenceArray[i]);
  }
  return result.join(" ");
}
console.log(
  reverseWord("Implement a function that removes all whitespace from a string")
);
// Implement a function that removes all whitespace from a string.
function removeSpaces(string) {
  let filteredString = "";
  for (let i of string) {
    i === " " ? null : (filteredString += i);
  }
  return filteredString;
}
console.log(
  removeSpaces(
    "Implement a function that removes all whit espace from a string"
  )
);

// Factorial of given number
function factorialNumber(number) {
  let sum = number;
  for (let i = number - 1; i > 0; i--) {
    sum = sum * i;
  }
  return sum;
}
console.log(factorialNumber(5));
// square root of number
function squareRoot(number) {
  return Math.sqrt(number);
}
console.log(squareRoot(11));

// Check prime number
function CheckPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(CheckPrimeNumber(17));

// Implement a function to sort an array of objects based on a specific property value.

function sortByProperty(array, property) {
  return array.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
}

// Example usage:
const students = [
  { name: "John", age: 20 },
  { name: "Alice", age: 18 },
  { name: "Bob", age: 22 },
];

const sortedStudents = sortByProperty(students, "age");
console.log(sortedStudents);
/*
Output:
[
  { name: "Alice", age: 18 },
  { name: "John", age: 20 },
  { name: "Bob", age: 22 }
]
*/

// Write a function that finds the intersection of two arrays.
function findInteracton(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersection = [...set1].filter((number) => set2.has(number));
  return intersection;
}

console.log(findInteracton([1, 2, 3, 4, 5], [3, 4, 9, 3, 4]));

// Write a function that checks if a given year is a leap year.
function checkLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
console.log(checkLeapYear(2025));

// Write a function that converts a string to title case (capitalize the first letter of each word).

function capitalize(string) {
  const arrayString = string.split(" ");
  const result = arrayString.map((word) => {
    const firstCapital = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstCapital + restOfWord;
  });
  return result.join(" ");
}

console.log(
  capitalize(
    "Write a function that converts a string to title case capitalize the"
  )
);

//  Find sum numbers
function SumNumber(arr, sum) {
  let indexes = [];
  arr.map((item, index) => {
    let num = sum - item;
    let secondNum = arr.findIndex((item) => item === num);
    if (secondNum > 0 && indexes.length < 2) {
      indexes = [index, secondNum];
    }
  });
  return indexes;
}

console.log("the sum number", SumNumber([1, 2, 4, 5, 3, 6], 9));

console.log(typeof null);
console.log(typeof undefined);

console.log(8 > 7 > 6 < 1);

console.log(5 + true);

console.log("5" + true);
console.log("5" - true);

console.log("1" + "1" - "1" + "1");

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length / 2; i++) {
  arr[arr.length - 1 - i] = arr[i]; //5=1  4=2
  arr[i] = arr[arr.length - 1 - i]; //1=5   2=4
}
console.log(arr);

// const function1 = () => {
//   console.log("Function 1");
// };
// const function2 = () => {
//   console.log("Function 2");
// };
// const function3 = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Function 3");
//   });
// };

// const main = () => {
//   console.log("Main");
//   function1();
//   function3().then((resp) => {
//     console.log(resp);
//   });
//   function2();
// };
// main();

//Main
// function 1
// function 3
// function 2

let deepArr = [
  [1, 2, 3],
  [1, 2, [1, 2, 3], 3],
  [1, 2, 3],
  [1, 2, 3],
];

function flatArray(array) {
  deepArr.map((item) => {
    if (item.typeof() === "object") flatArray(item);
  });
}

// input = 'shgtw34652jbdy57gd'
// output = 'shgtwjbdygd3245567'

function sortNumber(string) {
  let str = [];
  let num = [];
  for (let n of string) {
    if (+n) {
      num.push(n);
    } else {
      str.push(n);
    }
  }
  num.sort((a, b) => a - b);
  return `${str.join("")}${num.join("")}`;
}

console.log(sortNumber("shgtw34652jbdy57gd"));
