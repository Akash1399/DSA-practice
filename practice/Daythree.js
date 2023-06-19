// compare brackets
function compareBrackets(s){
    const stack = [];
    const pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    for (let char of s) {
      if (pairs[char]) {
        // Opening parentheses
        stack.push(char);
      } else {
        // Closing parentheses
        const top = stack.pop();
  
        if (pairs[top] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
}
console.log(compareBrackets("[({[([{}])]})}"))
console.log('/////////////////////////////////////////////////////')
let mainArray=[]
function findDuplicates(a) {
    const N = a.length;
    const count = Array(N).fill(0); // Step 1
    // Step 2
    for (let i of a) {
        count[i] += 1;
    }
  
    const result = []; // Step 3
  
    // Step 4
    for (let i in a) {
      if (count[i] > 1) {
        result.push(+i);
      }
    }
  
    return result.length?result.join(' '):-1; // Step 5
  }
  
console.log(findDuplicates([0,3,1,2]))