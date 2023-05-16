let nav=document.querySelector("nav")
let menuIcon =document.querySelector("#menu")
menuIcon.addEventListener("click",function(){
    nav.classList.toggle("show")
    this.classList.contains("fa-bars")
    ?(this.classList="fa-solid fa-xmark")
    :(this.classList="fa-solid fa-bars")
})