 
 ///////////////////////////N1
//  const arr1=["a",'b',"c","d","e"]
//  arr1.splice(1,1)
//  console.log(arr1)
 ///////////////////////////2
//  arr1.splice(2,1)
//  console.log(arr1)

 //////////////////////////3
//  arr1.splice(arr1.length-1)
//  console.log(arr1)

///////////////////////////4
// arr1.splice(arr1.length-3)
// console.log(arr1)

///////////////////////////5
// arr1.splice(3,0,3,4)
// console.log(arr1)

////////////////////////////6
// arr1.splice(0,2,"A","B")
// console.log(arr1)
 
///////////////////////////////////////////////////////N2
// const arr2=["user1","user2","user3",11,3,5]

/////////////////1
//  let newArr=arr2.slice(arr2)
// console.log(arr2)

////////////////2
// const newArr=arr2.slice(1,5)
// console.log(newArr)

/////////////////3
// const newArr=arr2.slice(2,5)
// console.log(newArr)

///////////////////////////////////////////////////////n3
// const arr3=[1,2,3]
// const arr33=[4,5,6]
/////////////////1
// let concat=arr3.concat(arr33)
// console.log(concat)

///////////2
// let contac1=arr3.concat('a','b')
// console.log(contac1)

////////////////////////////////////////////n4
/////////////////////////1
// const arr4=["name","surname",10,"age","city","uni",80,20]
// arr4.forEach((arr)=>{
//     console.log(arr)
// })
//////////////////////2
// arr4.forEach((element)=>{
//     typeof element=="number" ? console.log(element*2):null;
// })
/////////////////////////////////////////////N5
///////////////1
// const arr5=[4,5,6,"2",6,true,undefined,"55"]
// arr5.map((arr)=>{
//     console.log(arr)
// })

//////////////2
// arr5.map((item)=>{
//         typeof item=="number" ? console.log(item*2):console.log(item);
//     })
/////////////3

//  const result= arr5.map((item)=>{
//    return String(item)
    
// })
// console.log(result)
////////////////4

// console.log(result)
//////////////////////////////////////////////////N6
const mixArray=["1",2,4,"a",false,"9",12,"42",undefined,3,true,null]
// const result= mixArray.filter((item)=> typeof item ==="number")
// console.log(result)
//////////////////////////////2
// const result= mixArray.filter((item)=> typeof item ==="string")
// console.log(result)
/////////////////////////3
//  const result= mixArray.filter((item)=> typeof item ==="boolean")
//  console.log(result)
/////////////////////4
const result= mixArray.filter((item)=>!item)
console.log(result)