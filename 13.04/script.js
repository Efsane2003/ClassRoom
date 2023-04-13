////////////////////////
// function findDigit(num) {
//   let x = num % 10;
//   let y = (num - (num % 100)) / 100;
//   let z= (num%100-x)/10


//   console.log(x);
//   console.log(y);
//   console.log(z)
// }
// findDigit(123);
/////////////////////////////// 1 ////////////////////////////////
const arr1=["a","b","c","d","e","f","j","k","y","u"]
function getRandomLetter(parameter){
  return parameter[Math.floor(Math.random()*parameter.length)]

}
console.log(getRandomLetter(arr1))
/////////////////////////// 2 ////////////////////
const arr2=[1,2,3,4,14,5,6,8];
let sum=0;
function calcSum(){
  for(let calc of arr2){
    if(calc%2==0){
      sum+=calc
    }
   
  }
  return sum
}
console.log(calcSum())
/////////////////////////// 3 ////////////////
function getPositiveNum(){
  let num=[];
  const arr3=[-3,-5,-9,3,0,true,false,-22];
  for(let i=0;i<arr3.length; i++){
    num.push(Math.abs(arr3[i]))
  }
  return num
}
console.log(getPositiveNum())
///////////////////////////// 4 ////////////////
const arr4=[4,9,16,20,24,43,81,100];
function calcSquareRoot(){
  let square=[];
  for(let i=0;i<arr4.length; i++){
    square.push(Math.floor(Math.sqrt(arr4[i])))
  }
  return square
}
console.log( calcSquareRoot())
////////////////////////// 5 /////////////
const arr5=[
  {
    name:"my name",
    surname:"my surname",
    city:"my cty"
  },
  {
    name:"my name",
    surname:"my surname",
    city:"my cty"
  },
  {
    name:"my name",
    surname:"my surname",
    city:"my cty"
  }
]

function fillInfo(){
for(let info of arr5){
  info.name="Afsana",
  info.surname="abbasova",
  info.city="Ganja"
}
return arr5
}
console.log(fillInfo())



