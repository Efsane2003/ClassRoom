const BASE_URL="http://localhost:8080/card"
let form=document.querySelector("form")
let allInpus=document.querySelectorAll(".form-control")



form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj={
        img:`./assets/img/${allInpus[0].value.split("\\")[2]}`,
        title:allInpus[1].value,
        info:allInpus[2].value
    }
    axios.post(`${BASE_URL}`,obj)
    window.location="index.html"

})
