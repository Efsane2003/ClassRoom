///////////////////////////////////////////////////////////////////reverse string

// function revereseString(str){
//     return str.split("").reverse().join("")
//   }
//   console.log(revereseString("hello")); // olleh
//   console.log(revereseString("gdu")); // udg

//   metod 2

//   function reverseString2(str){
//     let result="";
//     for(let i=str.length-1;i>=0;i--){
//         result+=str[i]
//     }
//     return result
//   }
// console.log(reverseString2("hello")); // olleh
// console.log(reverseString2("gdu")); // udg

  //////////////////////////////////////////////////////////////////polidrom

// function isPolindrom(str){
//     if(str===str.split("").reverse().join("")){
//         return `YES ${str} ispolindrom`
//     }else{
//         return`NO ${str} is not polindrom`
//     }
// }
// console.log(isPolindrom("hello"))
// console.log(isPolindrom("refer"))
//   }

// metod2

//   function isPolidrom2(str){
//     return str===str.split("").reverse().join("") ? `YES, ${str} is polidrom`:`NO,${str} is not polidrom`
//   }
//   console.log(isPolidrom2("hello")); // No, hello is not polidrom
//   console.log(isPolidrom2("refer")); // Yes, refer is polidrom
  

  //remove dublicated
  
  let arr = [1, 2, 2, 2, 4, 3, 3, 2, 4, 7, 5, 7, 6];

// function removeDublicated(array){
//     return array.filter((element,index)=>array.indexOf(element)===index)
// }
// console.log(removeDublicated(arr))
//  metod 2

  // function removeDublicates2(array) {
  //   let result = [];
  //   for (let item of array) {
  //     if (!result.includes(item)) {
  //       result.push(item);
  //     }
  //   }
  //   return result;
  // }

//   metod 3

//   function removeDublicates2(array) {
//     let result = [];
//     array.forEach((element) => !result.includes(element) && result.push(element));
//     return result;
//   }
//   function removeDublicates3(array) {
//     return [...new Set(array)];
//   }
  
  // let mySet = new Set(arr);
  // console.log([...mySet]);
  
  // console.log(removeDublicates2(arr));
//   console.log(removeDublicates3(arr));
  
  // console.log(removeDublicates2(arr)); // [1,2,3,4,5,6,7]
  


  //generate otp

// function generateOtp(){
//     let otp="";
//     for(let i=0;i<4;i++){
//         otp+=Math.floor(Math.random()*10)
//     }
//     return otp
// }
// console.log(generateOtp())

// metod 2

//   function generateOtp2() {
//     let digits = "0123456789";
//     let otp = "";
//     for (let i = 0; i < 4; i++) {
//       otp += digits[Math.floor(Math.random() * 10)];
//     }
//     return otp;
//   }
  
// function generateOtp2(){
//     let result="0123456789";
//     let otp="";
//     for(let i=0;i<4;i++){
//         otp+=result[Math.floor(Math.random()*10)]
//     }
//     return otp
// }
// console.log(generateOtp2())

//   console.log(generateOtp2()); //4523
//   console.log(generateOtp2()); //9845
//   console.log(generateOtp2()); //1532
  
  //find all truth values
  
  let myArr = [1, 4, true, false, 0, 5, "hello", NaN, undefined];
  
// console.log(myArr.filter(Boolean)); // all truth
// console.log(myArr.filter((element) => !Boolean(element))); //all falsy