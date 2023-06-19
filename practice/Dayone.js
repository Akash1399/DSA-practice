// Input:
// n = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17
// as it is greater than all the elements
// to its right.  Similarly, the next
// leader is 5. The right most element
// is always a leader so it is also
// included.

function findLeader(array) {
  let leaders = [];
  for (let i = 0; i <= array.length - 1; i++) {
    leaders.push(array[i]);
    while (leaders[leaders.length - 1] < array[i + 1]) {
      leaders.pop();
    }
  }
  return leaders.join(" ");
}

console.log(findLeader([16, 17, 4, 3, 5, 2]));

// N = 3
// A[] = {1,2,3}
// Output:
// -1
// Explanation:
// Since, each element in
// {1,2,3} appears only once so there
// is no majority element.

function findMajorityElement(arr,size) {
    let condition=size/2
    let occurance={}
    let maxCount=0
    let maxElement=-1
    for(let a in arr){
        occurance[arr[a]]=(occurance[arr[a]] || 0) +1
    }
    console.log(occurance)
    for(const [key,value] of Object.entries(occurance)){
        console.log(value>condition,value,condition)
        if(value>condition){
            maxCount=value
            maxElement=key
        }
    }
    return maxElement
  }
  // Example usage:
  const array = [1,15];
  console.log(array.length)
  const majorityElement = findMajorityElement(array,2);
  console.log(majorityElement)
  
