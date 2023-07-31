// const duplicateArray = [1, 2,1, 3, 4, 5, 1, 2, 3];

// const refineDuplicateValues = (array) => {
//   const result = {};
//   for (let n of array) {
//     if(result[n]===undefined){
//       result[n]=0
//     }
//     result[n]+=1
//   }
//   return result;
// };
// console.log(refineDuplicateValues(duplicateArray));

// let array=new Set(duplicateArray)
// let result=[...array]
// console.log(result)

// this key word code

// const person={
//   name:'Akash',
//   play(){
//     console.log(this)
//   }
// }
// function play(){
//   console.log(this)
// }

// const second={
//   name:"second",
//   play:()=>{console.log(this)}
// }
// person.play()
// // play()
// second.play()

// let person = {
  // name: "AKash",
  // number: [1, 2, 3, 4],
  // play: function () {
    // this.number.map(function (acc, number) {
      // console.log(`${number}-${this.name}`);
    // });
  // },
// };
// 
// person.play();

// let person1={
    // name:'Akash',
    // lastName:"satre"
// }
// let person2={
  // name:'allu',
  // lastName:"arjun"
// }
// 
// function printName(behaviour,act){
  // console.log(this.name,this.lastName,behaviour,act)
// }

// printName.call(person1,'great humans')
// printName.apply(person1,['great humans'])
// printName.call(person2,"great human with a great acting skills")


// let bindedHumans=printName.bind(person1,"great")
// bindedHumans("hello")

// function parent(){
  // console.log("parent")
  // return function parent(){
    // console.log("child")
  // }
// }
// parent()()
// 

// let original={
//   name:'Akash',
//   lastName:{
//     subName:"random"
//   }
// }

// let duplicate=JSON.parse(JSON.stringify(original))
// duplicate.lastName.subName="aniket"
// console.log(original)
