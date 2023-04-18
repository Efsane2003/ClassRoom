// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"
function secretName (arr){
    return arr.map((element)=>element[0]).join("")
}
console.log(secretName(names1))
console.log(secretName(names2))
console.log(secretName(names3))

// 2.Manipulate array///////////////////////////////////////////////////////
const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]
// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
// function isUni(arr){
//     return arr.filter((item)=>item.uni==="UNEC" && item.surname[0]==="R" )
// }
// console.log(isUni(users))
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.

// function isUni(arr){
//     return arr.filter((item)=>item.age==="22" && item.name[0].toLocaleLowerCase()==="a")
// }
// console.log(isUni(users))

// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').


// 2.4.Sort users by age (ascending).