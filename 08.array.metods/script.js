// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']
// const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
// function getUpper(arr){
//     return arr.map((element)=>element[0].toUpperCase()+element.slice(1,-1)+element.at(-1).toUpperCase())

// }
// console.log(getUpper(arr1))


// 2.String and Array

// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!

// console.log(text.replace("MERN-Stack","Front-end")) 

// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!

// console.log(text.replaceAll("e","a").toLowerCase())

// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!

// console.log(text.concat(" in Microsoft!"))

// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]

// const newArr=[]
// text.split("").map((el,index)=>el.toLocaleLowerCase()=="r" ? newArr.push(index):newArr )
// console.log(newArr)

// 5.Find index of first 'r' (excepting 'are').  // 9

// console.log(text.toLocaleLowerCase().indexOf("r",7))

// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
// let vowels = ['a', 'i', 'o', 'u', 'e']
// let text = 'We are MERN-Stack developers'
// function unique(arr) {
//     let result = [];
//     for (let str of arr) {
//       if (!result.includes(str)){
//          result.push(str);
//       }
//     }
//     return result ;
//   }
//   console.log(unique(text))

// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'
// const arr3 = [
//     {
//         region: 'Yasamal',
//         area: 170,
//     },

//     {
//         region: 'Nizami',
//         area: 20,
//     },

//     {
//         region: 'Nesimi',
//         area: 10,
//     },

//     {
//         region: 'Sebail',
//         area: 30,
//     },
//     {
//         region: 'Xetai',
//         area: 30,
//     },
// ]
// function calcArea(arr) {
//     let result=arr.reduce((prev, curr) => curr.region.length===6? prev + curr.area:prev, 0);
//     console.log(result);
// }
calcArea(arr3)


// 4.Sort 'arr3' ascending order.

// const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
// console.log(arr4.sort((a,b)=>a-b))

// 5.Gather all nested array in one array.

// const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
//  console.log(arr5.flat(Infinity))

// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.

const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
console.log(colors.sort((a,b)=>a.length-b.length))









