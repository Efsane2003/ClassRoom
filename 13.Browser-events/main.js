let container=document.createElement("container")
let form=document.createElement("form")
let label1=document.createElement("label")
let input1=document.createElement("input")
let label2=document.createElement("label")
let input2=document.createElement("input")
let input3=document.createElement("input")
let input4=document.createElement("input")
let input5=document.createElement("input")
let button=document.createElement("button")
let button1=document.createElement("button")
let parag=document.createElement("p")
let btnalert=document.createElement("button")


document.body.append(container)
document.body.prepend(parag)
document.body.prepend(button1)
container.append(form)
document.body.append(btnalert)
// container.prepend(parag)


form.append(label1)
form.append(input1)
form.append(label2)
form.append(input2)
form.append(input3)
form.append(input4)
form.append(input5)
form.append(button)


label1.innerHTML="<h3>Name</h3>"
label2.innerHTML="<h3>Surname</h3>"
button.innerText="Submit"
button1.innerText="Let's start..."
btnalert.innerText="Next Parag"




form.style.display="flex"
form.style.justifyContent="center"
form.style.alignItems="center"
form.style.flexDirection="column"
form.style.height="100vh"
form.style.border="2px dotted"
input4.style.margin="5px 0"
input5.style.margin="5px 0"
button1.style.display="bloc"
parag.style.border="1px solid"

parag.style.display="inline"
// parag.style.width="50px"



input1.required="true"
input2.required="true"
input3.required="true"
input4.required="true"
input5.required="true"

input3.type="checkbox"
input4.type="radio"
input5.type="radio"
input4.style.accentColor="teal"
input5.style.accentColor="red"
input4.setAttribute("name","required")
input5.setAttribute("name","required")
btnalert.setAttribute("disabled","")
button.setAttribute("disabled","")

let time=15
let interval;
parag.innerHTML=`00:${time}`
button1.addEventListener("click",function(){
    interval=setInterval(()=>{
        time-=1
        parag.innerHTML=`00:${time}`
        button1.setAttribute("disabled","")  
        if(time==0){
            clearInterval(interval)
            parag.innerText="your miss";
            parag.style.color="red"
        }
        button.removeAttribute("disabled","")
        btnalert.removeAttribute("disabled","")
    },1000)
})

btnalert.addEventListener("click",function(){
    window.alert("Finis")
})

button.addEventListener("click",function(){
    interval=setInterval(()=>{
        time-=1
        parag.innerHTML=`00:${time}`
        button1.setAttribute("disabled","")  
        if(time==0){
            clearInterval(interval)
            parag.innerText="your miss";
            parag.style.color="red"
        }
        button.removeAttribute("disabled","")
    },1000)
})





