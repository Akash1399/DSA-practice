// Given an array of N integers arr[] where each element represents the maximum length of the jump that can be made forward from that element. This means if arr[i] = x, then we can jump any distance y such that y ≤ x.
// Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

// Note: Return -1 if you can't reach the end of the array.

// Input:
// N = 11
// arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3
// Explanation:
// First jump from 1st element to 2nd
// element with value 3. Now, from here
// we jump to 5th element with value 9,
// and from here we will jump to the last.

const calculateJumps = (arr, n) => {
  if (arr[0] > 1) {
    return -1;
  } else {
    let distanceRemaining = n;
    let currentPosition = 0;
    let totalJumps = 0;
    while (distanceRemaining >= 0) {
      distanceRemaining -= arr[currentPosition];
      currentPosition = distanceRemaining - 1;
      totalJumps += 1;
    }
    return totalJumps;
  }
};

console.log(calculateJumps([1, 4, 3, 26, 7], 6));

// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4

function findMissingNumber(arr) {
  let totalNumber = arr.length + 1;
  let totalSum = (totalNumber * (totalNumber + 1)) / 2;
  let sumNumbers = arr.reduce((acc, el) => acc + el, 0);
  let missingNumber = totalSum - sumNumbers;
  return missingNumber;
}

console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([6, 1, 2, 8, 3, 4, 7, 10, 5]));

// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which
// is a contiguous subarray.

const findSum = (arr) => {
  let maxSum=-Infinity
  let curSum=0
  for(let i of arr){
    curSum+=i
    curSum>maxSum? maxSum=curSum:null
    curSum<0?curSum=0:null
  }
  return maxSum
};

console.log(findSum([1,2,3,-2,5]))
console.log(findSum([-1,-2,-3,-2,-5]))

