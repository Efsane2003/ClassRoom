let tbody=document.querySelector("tbody")
let searchInput=document.querySelector("#searchInput")
let inputs=document.querySelectorAll(".form-control")
let faArrowUp=document.querySelector(".fa-arrow-up")
let faArrowDown=document.querySelector(".fa-arrow-up")


let form=document.querySelector("#userForm")

function usersData(arr){
    tbody.innerHTML=""
    arr.forEach(element => {
        tbody.innerHTML+=`
        <tr>
        <td class="sortFristName">${element.fristName}</td>
        <td>${element.lastName}</td>
        <td>${element.email}</td>
        <td>${element.cardNumber}</td>
        <td>
        <a class="btn btn-warning" onclick=editUsers("${element.id}")>edit</a>
        <a class="btn btn-danger" onclick=deleteSupplier("${element.id}",this)>delete</a>
        <a class="btn btn-primary" onclick=detalsSupplier("${element.id}",this)>Detals</a>
        </td>  
    </tr>
        `
    })
}
axios("http://localhost:8080/users")
.then((res)=>{
    usersData(res.data)
})

// alert
// function alertDiv(content,alertColor){
//     notification.className=`alert alert-${alertColor}`
//     notification.innerText=content
//     notification.visiblity="visible"
// }

function deleteSupplier(id){
    axios.delete(`http://localhost:8080/users/${id}`)
    usersData()
}

form.addEventListener("submit",function(e){
    e.preventDefault()
    let obj={
        fristName:inputs[0].value,
        lastName:inputs[1].value,
        email:inputs[2].value,
        cardNumber:inputs[3].value
    }
    axios.post("http://localhost:8080/users",obj)
})







searchInput.addEventListener("input",function(event){
    axios("http://localhost:8080/users")
    .then((res)=>{
        
        let filteredUsers=res.data.filter((element)=>{
            
            return element.fristName.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())})
            usersData(filteredUsers)
    })
    
})

let id=localStorage.getItem("usersId")
function editUsers(id){
    // console.log(id)
    localStorage.setItem("usersId",id)
    axios(`http://localhost:8080/users/${id}`)
    .then((res)=>{
        inputs[0].value=res.data.fristName,
        inputs[1].value=res.data.lastName,
        inputs[2].value=res.data.email,
        inputs[3].value=res.data.cardNumber
    })
    form.addEventListener("submit",function(e){
        e.preventDefault()
        let obj={
            fristName:inputs[0].value,
            lastName:inputs[1].value,
            email:inputs[2].value,
            cardNumber:inputs[3].value
        }
        
        axios.patch("http://localhost:8080/users",obj)
    
})
}

let sortFristName=document.querySelector("#thFirstName")
let bool=false;
sortFristName.addEventListener("click",function(){
    bool=!bool
    if(bool){
        axios("http://localhost:8080/users")
        .then((res)=>{
            let sortFrist=res.data.sort((a,b)=>b.fristName.localeCompare(a.fristName))
            let arrowup=document.querySelector(".arrowup").style.display="block"
            let arrowdown=document.querySelector(".arrowdown").style.display="none"
            usersData(sortFrist)
        })
    }else{
        axios("http://localhost:8080/users")
        .then((res)=>{
            let sortFrist=res.data.sort((a,b)=>a.fristName.localeCompare(b.fristName))
            let arrowup=document.querySelector(".arrowup").style.display="none"
            let arrowdown=document.querySelector(".arrowdown").style.display="block"
            usersData(sortFrist)
        })
    }
})

