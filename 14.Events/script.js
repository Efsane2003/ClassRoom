let form=document.querySelector(".form")
let btnSubmit=document.querySelector(".btnSubmit")
let input1=document.querySelector(".input1")
let input2=document.querySelector(".input2")
let input3=document.querySelector(".input3")
let input4=document.querySelector(".input4")
let input5=document.querySelector(".input5")
let checked=document.querySelector(".checked")
let radio=document.querySelector(".radio")


btnSubmit.setAttribute("disabled","")

input1.addEventListener("mouseover",function(event){
    this.style.backgroundColor="green"
    this.style.color="white"
})
input1.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
})

input2.addEventListener("click",function(){
    this.style.backgroundColor="blue"
})
input2.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
})

input3.addEventListener("contextmenu",function(){
    this.style.border=" 1px solid yellow"
})

input4.addEventListener("focus",function(event){
    event.target.value="uygyujhyg"
})

checked.style.display="none"
input5.addEventListener("focus",function(){
    checked.style.display="block"
})
input5.addEventListener("blur",function(){
    checked.style.display="none"
})

// radio1.addEventListener("click",function(){
//     alert("salam")
// })
// radio2.addEventListener("click",function(){
//     alert("salam")
// })
// radio3.addEventListener("click",function(){
//     alert("salam")
// })

radio.forEach(element => {
    element.addEventListener("click",function(){
     alert("thanks")
    })
    
});

// btnSubmit.addEventListener("change",function(){
//     if()
// })








