const BASE_URL = "http://localhost:8080/users";
const notification = document.querySelector("#notification");
const userForm = document.querySelector("#userForm");
const deleteBtn = document.querySelector("#deleteBtn");
const editBtn = document.querySelector("#editBtn");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const cardNumber = document.querySelector("#cardNumber");
const tBody = document.querySelector("#tBody");
const searchInput = document.querySelector("#searchInput");
const thFirstName = document.querySelector("#thFirstName");
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");
const submitBtn = document.querySelector("#submitBtn");
const usersCount = document.querySelector("#usersCount");

let copyArr = [];
let filtredArr = [];
let isEditing = false
let isSorted = false
let editedId

async function getAlllUsers() {
  const res = await axios.get(BASE_URL);
  const data = res.data;
  // console.log(data)
  tBody.innerHTML = "";
  copyArr = data;
  filtredArr = searchInput.value || filtredArr.length ? filtredArr : data;
  filtredArr.forEach((user) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.email}</td>
        <td>${user.cardnumber.split``.fill("*", 0, cardNumber.value.length - 5)
          .join``}</td>
        <td>
        <a href="#" onclick=editUser('${
          user.id
        }') id="editBtn" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" onclick=deleteUser('${
          user.id
        }') id="deleteBtn" class="btn btn-danger btn-sm delete">Delete</a>
        <a href='#' onclick=getUserDetail('${user.id}','${user.name}','${
      user.date
    }') class='btn btn-primary btn-sm'>Detail</a>
        </td>
        `;
    tBody.append(tr);
  });
}
getAlllUsers();

// alert
function showAlert(message, className) {
  notification.innerHTML = message;
  notification.className = `alert alert-${className}`;
  notification.removeAttribute("hidden");
  setTimeout(() => {
    notification.setAttribute("hidden", "");
  }, 20000);
}
// userform submit
userForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const date=new Date()
    const user={
        name:firstName.value,
        surname:lastName.value,
        email:email.value,
        cardnumber:cardNumber.value,
        date:date.toLocaleDateString()
    }
    if(!firstName.value||!lastName.value||!email.value){
        showAlert('Please fill in all fields', 'warning')
    }else if(isEditing){
        showAlert('Edited User successfully!', 'success')
        editUser2(editedId, user)
        getAlllUsers()
    }else{
        showAlert('Added users successfully!', 'success')
        isEditing=false
        addUser(user)
        
    }
    submitBtn.value="Submit"
    emptyInput()
})
// delete
async function deleteUser(userId){
    showAlert("Deleted User","danger")
    await axios.delete(`${BASE_URL}/${userId}`)
    getAlllUsers()
}
// add user
async function addUser(user){
    await axios.post(BASE_URL,user)
    getAlllUsers()
}

// edit

async function editUser(userId){
    const res=await axios(`${BASE_URL}/${userId}`)
    const data=res.data
    firstName.value=data.name
    lastName.value=data.surname
    email.value=data.email
    cardNumber.value=data.cardnumber
    isEditing=true
    editedId=userId
    submitBtn.value="Edit"
}
async function editUser2(userId,user){
    await axios.patch(`${BASE_URL}/${userId}`,user)
    getAlllUsers()
}
function emptyInput(){
    firstName.value=""
    lastName.value=""
    email.value=""
    isEditing=false
}

// search 
searchInput.addEventListener("input",()=>{
    filtredArr=copyArr
    filtredArr=filtredArr.filter((user)=>
        `${user.name} ${user.surname}`.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase())
        
    )
    getAlllUsers()
})

thFirstName.addEventListener('click', () => {
    if (isSorted) {
        isSorted = !isSorted
        arrowUp.style.display = 'inline-block'
        arrowDown.style.display = 'none'
        filtredArr.sort((a, b) => a.name.localeCompare(b.name))
    } else {
        isSorted = !isSorted
        arrowUp.style.display = 'none'
        arrowDown.style.display = 'inline-block'
        filtredArr.sort((a, b) => b.name.localeCompare(a.name))
    }
    getAlllUsers()
})


async function getUserDetail(userId, username, userDate) {
    await axios.get(`${BASE_URL}/${userId}`)
    showAlert(`User: ${username} has been created on - ${userDate}!`, 'primary')
}