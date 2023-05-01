// const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];
// 1

// let falsyValue = () => {
//   let newArr = [];
//   for (let i = 0; i <arr.length; i++)
//     if (!arr[i]) {
//       newArr.push(arr[i]);
//     }
//     return newArr;
// };
// console.log(falsyValue(arr));

// 2
// let stringvalues=()=>{

//     let newArr=[]
//     for(let i = 0; i <arr.length; i++)
//     if(typeof(arr[i])=="string"){
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// 3
// let sliceArr=()=>{
//     let newArr=[]
//     for(let i=3;i<arr.length-5;i++)
//     newArr.push(arr[i])
//     return newArr
// }
// console.log(sliceArr(arr))

// 4
// let sumArr = () => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number" && arr[i]) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// };
// console.log(sumArr(arr));

// 5
// let findLastIndex = () => {
//   let newArr = "";
//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] == 8) {
//       newArr+=i;
//     }
//   }
//   return newArr;
// };
// console.log(findLastIndex(arr));

// 6
// let reverseArr=()=>{
//     let newArr=[]
//     for (let i = arr.length-1; i >=0; i--){
//         if(arr[i]){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(reverseArr(arr))

// 7
// const arrNum = [3, 1, 22, 0, 12, 11, 9, 8, 10, 14, 41, 55, 51];
// let temp = [];
// let sortArr = () => {
//   for (let i = 0; i < arr.length- 1; ++i) {
//     for (let j = i + 1; j < arr.length; ++j) {
//       if (arr[i] > arr[j]) {
//       let  temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr
// };
// console.log(sortArr(arrNum))



