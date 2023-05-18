let nav=document.querySelector("nav")
let menuIcon =document.querySelector("#menu")
menuIcon.addEventListener("click",function(){
    nav.classList.toggle("show")
    this.classList.contains("fa-bars")
    ?(this.classList="fa-solid fa-xmark")
    :(this.classList="fa-solid fa-bars")
})
const BASE_URL = `http://localhost:8080/users/`;

let tBody = document.querySelector("#tBody");
let cards=document.querySelector(".cards")

async function userData(arr) {
  const res = await axios(BASE_URL);
  const data = await res.data;
  tBody.innerHTML = "";
  data.forEach((el) => {
    tBody.innerHTML += `
        <tr>
        <td>${el.id}</td>
        <td><img src='${el.photo}' width="40" height="40" style="border-radius: 100%;" alt=""></td>
        <td>${el.name}</td>
        <td>${el.surName}</td>
        <td>${el.email}</td>
        <td>${el.date}</td>
        <td><a href="adduser.html?id=${el.id}" type="button" class="btn btn-success">
       Edit
      </a>
      <button type="button" class="btn btn-danger" onclick=deleteUser(${el.id},this)>Delete</button>
      <a href="#" onclick=addFavUser('${el.id}') class="btn btn-primary btn-sm")>
        Add Fav
      </a></td>
        </tr>
        `;
        cards.innerHTML+=`
        <div class="cards d-flex flex-column row-gap-4">
                <div class="card p-3">
                  <div>
                    <span>id:${el.id}</span><span>Date:5/14/2023,4:12:58 PM</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="d-flex column-gap-3">
                      <div class="photo">
                      <img src='${el.photo}' width="40" height="40" style="border-radius: 100%;" alt="">
                      </div>
                      <div>
                        <b>${el.name} ${el.surName} Anton</b>
                        <p>${el.email}</p>
                      </div>
                    </div>
                    <div>
                    <a href="adduser.html?id=${el.id}" type="button" class="btn btn-success">
                    Edit
                   </a>
                   <button type="button" class="btn btn-danger" onclick=deleteUser(${el.id},this)>Delete</button>
                   <a type="button" class="btn btn-primary" href="favorite.html?id=${el.id} "onclick=addFavUser(${el.id} ,this)>
                     Add Fav
                   </a></div>
                  </div>
                </div>
              </div>`
  });
}
userData()
// delete
function deleteUser(id, btn) {
  axios.delete(`http://localhost:8080/users/${id}`);
  btn.closest("tr").remove();
}


//favorited
const favUsers=JSON.parse(localStorage.getItem("favoritedUser"))||[]

async function addFavUser(userId){
  const res=await axios.get(`${BASE_URL}/${userId}`)
  const data=await res.data
  let isAvailable=favUsers.find((user)=>user.id===data.id)
  if(!isAvailable){
    favUsers.push(data)
    localStorage.setItem("favoritedUser",JSON.stringify(favUsers))
  }else{
    alert("Character already exists in favorite list!")
  }
}


