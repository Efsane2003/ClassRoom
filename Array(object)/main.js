// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.

// filterArray([1, 'c', 2, "a", "b"]) // [1, 2]
function filterArray(arr){
   return arr.filter((el)=>typeof(el)=="number")

}
console.log(filterArray([1, 'c', 2, "a", "b"]))
console.log(filterArray(['4', 1, "a", "b", 0, 15]))


// 2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.
function sliceSum(item,n){
    return item.slice(0,n).reduce((acc,curr)=> {return acc+curr},0)
}
console.log(sliceSum([9, 8, 7, 6], 3))  
console.log(sliceSum([1, 3, 2], 2))  
console.log(sliceSum([3, 6, 2], 0))  

// sliceSum([9, 8, 7, 6], 3)  //24
// sliceSum([1, 3, 2], 2) //4
// sliceSum([3, 6, 2], 0) //0


// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
function spelling(str){
    return str.split("").map((_,i)=>str.slice(0,i+1))
}
console.log(spelling("bee")) // ["b", "be", "bee"]
console.log(spelling("happy")) //["h", "ha", "hap", "happ", "happy"]

// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].
// function hashPlusCount(str){
//     let newstr1=str.split("+").join("").length
//     let newstr2=str.split("#").join("").length
//     return [newstr1,newstr2]

// }
function hashPlusCount(str){
    let newstr1=0
    let newstr2=0
    str.split("").map(item)
    return [newstr1,newstr2]

}

console.log(hashPlusCount("###+")) // [3, 1]
console.log(hashPlusCount("#+++#+#++#")) // [4, 6]
console.log(hashPlusCount("")) // [0, 0]