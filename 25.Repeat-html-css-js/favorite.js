const cards=document.querySelector(".cards")
const favUsers=JSON.parse(localStorage.getItem("favoritedUser"))||[]

function getLocalFavUser(){
    cards.innerHTML=""
    favUsers.forEach((user)=>{
        cards.innerHTML+=`
        <div class="card" style="width:14rem;">
        <img class="card-img-top" src=${user.photo} alt="Card image cap">
        <div class="card-body">
          <h5 style='color:brown' class="card-title">${user.name} ${user.surname}</h5>
          <hr>
          <p class="card-text">${user.email}</p>
          <p class="card-text">${user.date}</p>
          <a href="#" onclick=removeLocalBtn('${user.id}') class="btn btn-primary">Remove fav</a>
        </div>
        </div>
        `
    })
}
getLocalFavUser()
// remove favarited
function removeLocalBtn(userId){
    console.log("s")
    favusers=favUsers.filter((user)=>user.id != userId)
    localStorage.setItem("favoritedUser",JSON.stringify(favusers))
    getLocalFavUser()
}