// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']
// const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
// function getUpper(arr){
//     return arr.map((element)=>element[0].toUpperCase()+element.slice(1,-1)+element.at(-1).toUpperCase())

// }
// console.log(getUpper(arr1))


// 2.String and Array
// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
// 5.Find index of first 'r' (excepting 'are').  // 9
// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
// let vowels = ['a', 'i', 'o', 'u', 'e']
let text = 'We are MERN-Stack developers'
// 1.
// console.log(text.replace("MERN-Stack","Front-end")) 
// 2.
// console.log(text.replaceAll("e","a").toLowerCase())
// 3.
// console.log(text.concat(" in Microsoft!"))
// 4. 
// const newArr=[]
// text.split("").map((el,index)=>el.toLocaleLowerCase()=="r" ? newArr.push(index):newArr )
// console.log(newArr)
// 5.
// console.log(text.toLocaleLowerCase().indexOf("r",7))
// 6.



// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'
const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },
]







