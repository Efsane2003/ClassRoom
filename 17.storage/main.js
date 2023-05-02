
// btn.addEventListener("click",function(){
//     let obj={
//         fristname:"Kamran",
//         lastname:"Alakbarov",
//         age:"23"
//     }
//   localStorage.setItem("object",JSON.stringify(obj))
//   function forEackey(object){
//     for(let i=0;i<localStorage.length;i++){
//         object(localStorage.key(i))
//     }
// return console.log(object)
// for(let i=0;i<localStorage.length;i++)

// }
// })
// 2

//////////////////////////////////////////////////////////////////




let btn=document.querySelector("#btn")
let deletebtn=document.querySelector("#delete-btn")
let empty=document.querySelector("#empty")

// 1
// btn.addEventListener("click",function(){
//     localStorage.setItem("fristname","kamran")
//     localStorage.setItem("lastname","Akbarov")
//     localStorage.setItem("age","23")
//     console.log(localStorage)
// })

// 1.2
// console.log(localStorage.length)

// 3
// Object.values(localStorage).forEach(function(value){
//     console.log(value)
// })
// 2
// Object.keys(localStorage).forEach(function(key){
//     console.log(key)
// })
// 4
// console.log(Object.keys(localStorage)[0])
// 4.1
// let array=[...Object.keys(localStorage)]
// console.log(array)
// 5
// console.log(Object.values(localStorage)[0])
// 5.1
// let array1=[...Object.values(localStorage)]
// console.log(array1)

// 6
// deletebtn.addEventListener("click",function(){
//     localStorage.removeItem("fristname")
// })


// 6.1
// empty.addEventListener("click",function(){
//     localStorage.clear()
// })

let input=document.querySelector("#exampleInputEmail1")
let input2=document.querySelector("#exampleInputEmail2")
let submit=document.querySelector(".btn-primary")
let password=document.querySelector("#exampleInputPassword3")
let array=[]
 submit.addEventListener("click",function(){
    let users={
        username:input.value,
        email:input2.value,
        password:password.value
    }
    if(users.username && users.email){
        array.push(users)
        localStorage.setItem("object",JSON.stringify(array))
    }
    

        // localStorage.setItem("surname",input.value)
        // localStorage.setItem("email",input2.value)
   
 })




