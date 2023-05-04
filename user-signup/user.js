let getInfo=JSON.parse(localStorage.getItem("object"))
let row=document.querySelector(".row")
let pelement=document.querySelectorAll("p")
let card=document.querySelector(".card")


getInfo.forEach((obj)=>{
    card.innerHTML+=`
    <div class="card">
                    <p>Name:${obj.email}</p>
                    <p>email:${obj.userName}</p>
                    <button>Delete</button>
                </div>

    `
}
)
