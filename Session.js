const duplicateArray = [1, 2,1, 3, 4, 5, 1, 2, 3];

const refineDuplicateValues = (array) => {
  const result = {};
  for (let n of array) {
    if(result[n]===undefined){
      result[n]=0
    }
    result[n]+=1
  }
  return result;
};
console.log(refineDuplicateValues(duplicateArray));

let array=new Set(duplicateArray)
let result=[...array]
console.log(result)