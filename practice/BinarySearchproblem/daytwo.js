// Given two unsorted arrays arr1[] and arr2[]. They may contain duplicates.
//  For each element in arr1[] count elements less than or equal to it in array arr2[].

// Example 1:

// Input:
// m = 6, n = 6
// arr1[] = {1,2,3,4,7,9}
// arr2[] = {0,1,2,1,1,4}
// Output: 4 5 5 6 6 6
// Explanation: Number of elements less than
// or equal to 1, 2, 3, 4, 7, and 9 in the
// second array are respectively 4,5,5,6,6,6


function  countEleLessThanOrEqual(arr1, arr2, m, n) {
    let count = Array(arr1.length).fill(0);
    
    // Sort arr2 in ascending order
    arr2.sort((a, b) => a - b);
    
    for (let i = 0; i < arr1.length; i++) {
      let left = 0;
      let right = n - 1;
      
      // Perform binary search to find the index of the last element less than or equal to arr1[i]
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr2[mid] <= arr1[i]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      
      // The count is the index of the last element found in the binary search
      count[i] = left;
    }
    
    return count;
  }
console.log(countEleLessThanOrEqual([1,2,3,4,7,9],[0,1,2,1,1,4],6,6))


function cutTress(arr,target){
    // arr.sort((a,b)=>a-b)
    let leftPointer=0
    let rightPointer=0
    while(leftPointer<rightPointer){
        let middlePointer=((leftPointer+rightPointer))
        if(arr[middlePointer]===target){
            return arr[middlePointer]
        }else if(target<arr[middlePointer]){
            rightPointer=middlePointer-1
        }else{
            leftPointer=middlePointer+1
        }
    }
    return -1
}

console.log("Wood required",cutTress([2,3,6,2,4],4))



