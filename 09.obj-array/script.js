// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

// let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
// let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
// let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"
// function secretName (arr){
//     return arr.map((element)=>element[0]).join("")
// }
// console.log(secretName(names1))
// console.log(secretName(names2))
// console.log(secretName(names3))

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
//     return arr.filter((item)=>item.uni==="UNEC" && item.surname[0].toLocaleLowerCase()==="r" )
// }
// console.log(isUni(users))
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.

// function isAge(arr){
//     return arr.filter((item)=>item.age==="22" && item.name[0].toLocaleLowerCase()==="a")
// }
// console.log(isAge(users))

// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').

// function isGender(arr){
//     return arr.map((user)=>user.gender==="famele" || user.gender==="male" ? `Mr: ${user.name}`: `Mrs: ${user.name}`)
// }
// console.log(isGender(users))

// 2.4.Sort users by age (ascending).

// console.log(users.sort((a,b)=>a.age-b.age))


// 3.Shuffle array////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(numbers.sort(() => (Math.random() > 0.3) ? 1 : -1));


// const letters = ['a', 'b', 'c', 'd']
// console.log(letters.sort(()=>(Math.random()>0.3) ? 1:-1))



// 4.Divide 2 the price of arr4.
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]
// 4.Divide 2 the price of arr4.

// console.log(arr4.map((element)=>element.price/2))

// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

// let num1 = 246 //246642
// let num2 = 102 //102201
// let num3 = 152 //152251
// function reverseNum(num)
// {
// 	num+= "";
// 	return `${num}${num.split("").reverse().join("")}`;
// }
// console.log(reverseNum(num1))
// console.log(reverseNum(num2))
// console.log(reverseNum(num3))