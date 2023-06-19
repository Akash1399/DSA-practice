//* Linear search
// function linearSearch(number) {
//   let arra = [-4, -7, 1, 2, 3, 5, 7, -1, -4];
//   for (let i = 0; i <= arra.length; i++) {
//     if (arra[i] === number) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch(12));

//* Binnary Search

function binarySearch(arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
      let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    if (target === arr[middlePointer]) {
      return middlePointer;
    } else if (target < arr[middlePointer]) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }
  return -1;
}
console.log(binarySearch([-4,1,2,3,4,6,7,8],7))