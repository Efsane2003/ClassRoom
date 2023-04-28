let form=document.querySelector(".form")
let btnSubmit=document.querySelector(".btnSubmit")
let inputname=document.querySelector(".inputname")
let inputsurname=document.querySelector(".inputsurname")
let inputemai=document.querySelector(".inputemai")
let inputpassword=document.querySelector(".inputpassword")
let inputcheckbox=document.querySelector(".inputcheckbox")
let checked=document.querySelector("h3")
let radio=document.querySelectorAll(".radio")


btnSubmit.setAttribute("disabled","")

inputname.addEventListener("mouseover",function(event){
    this.style.backgroundColor="green"
    this.style.color="white"
})
inputname.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
})

inputsurname.addEventListener("click",function(){
    this.style.backgroundColor="blue"
})
inputsurname.addEventListener("mouseout",function(){
    this.style.backgroundColor="transparent"
})

inputemai.addEventListener("contextmenu",function(){
    this.style.backgroundColor="yellow"
})

inputpassword.addEventListener("focus",function(event){
    event.target.value="uygyujhyg"
})

checked.style.visibility="hidden"
inputcheckbox.addEventListener("click",function(){
    checked.style.visibility="visible"
})

radio.forEach(element => {
    element.addEventListener("click",function(){
     alert("thanks")
    })
});


inputname.addEventListener("click",function(){
    if(inputname.value && inputsurname.value && inputcheckbox.checked){
        btnSubmit.removeAttribute("disabled","")  
    }else{
        btnSubmit.disabled="true"
    }
})

inputsurname.addEventListener("click",function(){
    if(inputname.value && inputsurname.value && inputcheckbox.checked){
        btnSubmit.removeAttribute("disabled","")  
    }else{
        btnSubmit.disabled="true"
    }
})
inputcheckbox.addEventListener("click",function(){
    if(inputname.value && inputsurname.value && inputcheckbox.checked){
        btnSubmit.removeAttribute("disabled","")  
    }else{
        btnSubmit.disabled="true"
    }
})











