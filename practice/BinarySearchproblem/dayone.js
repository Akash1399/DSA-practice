// Given a sorted array arr containing n elements with possibly duplicate elements, the task is to find indexes
// of first and last occurrences of an element x in the given array.

// Example 1:

// Input:
// n=9, x=5
// arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
// Output:  2 5
// Explanation: First occurrence of 5 is at index 2 and last
//              occurrence of 5 is at index 5.

const binarySearch = (arr, target) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let firstIndex = -1;
  let lastIndex = -1;
  while (leftPointer <= rightPointer) {
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

    if (target === arr[middlePointer]) {
      firstIndex = middlePointer;
      rightPointer = middlePointer - 1;
    } else if (target < arr[middlePointer]) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }
  leftPointer = 0;
  rightPointer = arr.length - 1;
  while (leftPointer <= rightPointer) {
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

    if (target === arr[middlePointer]) {
      lastIndex = middlePointer;
      leftPointer = middlePointer + 1;
    } else if (target < arr[middlePointer]) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }
  return [firstIndex, lastIndex];
};

console.log(binarySearch([1, 3, 5, 5, 5, 5, 67, 123, 125], 5));

// Given an array Arr[] of size L and a number N, you need to write a
// program to find if there exists a pair of elements in the array whose difference is N.
//
// Example 1:
//
// Input:
// L = 6, N = 78
// arr[] = {5, 20, 3, 2, 5, 80}
// Output: 1
// Explanation: (2, 80) have difference of 78.

function finPair(array, target) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let arr = array.sort((a, b) => a - b);
  while (leftPointer <= rightPointer) {
    let sub = arr[rightPointer] - arr[leftPointer];

    if (sub === target) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (target < sub) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return -1;
}

console.log(finPair([5, 20, 3, 2, 5, 80], 78));

function findSumPair(array, target) {
  let arr = array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (target === sum) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (target < sum) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return -1;
}
console.log("Sum Pair", findSumPair([2, 4, 6, 8, 10], 14));

// Given arrival and departure times of all trains that reach a
//  railway station. Find the minimum number of platforms required
//  for the railway station so that no train is kept waiting.
// Consider that all the trains arrive on the same day and leave on the same day.
// Arrival and departure time can never be the same for a train but we can have arrival time of
// one train equal to departure time of the other. At any given instance of time, same platform can not be used
// for both departure of a train and arrival of another train. In such cases, we need different platforms.

// Example 1:

// Input: n = 6
// arr[] = {0900, 0940, 0950, 1100, 1500, 1800}
// dep[] = {0910, 1200, 1120, 1130, 1900, 2000}
// Output: 3
// Explanation:
// Minimum 3 platforms are required to
// safely arrive and depart all trains.

function platformRequired(arrival, departure) {
    arrival.sort((a, b) => a - b); // Sort arrival times in ascending order
    departure.sort((a, b) => a - b); // Sort departure times in ascending order
  
    let platforms = 1; // Minimum number of platforms required
    let maxPlatforms = 1; // Maximum number of platforms needed at any instance
    let i = 1; // Pointer for arrival times
    let j = 0; // Pointer for departure times
  
    while (i < arrival.length && j < departure.length) {
      if (arrival[i] <= departure[j]) {
        platforms++; // Increment the number of platforms required
        i++; // Move the arrival pointer
        if (platforms > maxPlatforms) {
          maxPlatforms = platforms; // Update the maximum number of platforms
        }
      } else {
        platforms--; // Decrement the number of platforms required
        j++; // Move the departure pointer
      }
    }
  
    return maxPlatforms;
  
}
console.log(
  platformRequired(
    [0900, 1100, 1235],
    [1000, 1200, 1240]
  )
);
