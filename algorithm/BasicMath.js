
let figonachSeries=(n)=>{
    if(n<2){
        return n
    } 
    let series=[0,1]
    for(let i=2;i<n;i++){
       let number= series[series.length-1]+series[series.length-2]
       series.push(number)
    }
    return series
}
console.log(figonachSeries(0))
console.log(figonachSeries(1))
console.log(figonachSeries(2))
console.log(figonachSeries(3))

//! factorial Number
function factorial(n){
    let sum=n
    for(let i=n-1;i>0;i--){
       sum= sum*i
    }
    return sum
}
console.log(factorial(6))


// Linear search
function linearSearch(number){
    let arra=[-4,-7,1,2,3,5,7,-1,-4]
    for(let i=0;i<=arra.length;i++){
        if(arra[i]===number){
            return i
        }
    }
    return -1
}

console.log(linearSearch(12))