let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080/users/";
// console.log(id)
let nameIn = document.querySelector("#name");
let surName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let photo=document.querySelector("#photo")
let button = document.querySelector("#addVsSubmit");
let myForm = document.querySelector("#myForm");

async function getUserById() {
  const res = await axios.get(`${BASE_URL}/${id}`);
  const data = await res.data;
  console.log(data);
  nameIn.value = res.data.name;
  surName.value = res.data.surName;
  email.value = res.data.email;
}

async function editUser() {
  let userObj = {
    name: nameIn.value,
    surName: surName.value,
    email: email.value,
    date:new Date(),
    photo:`./images/${photo.value.split("\\")[2]}`
  };
  await axios.put(`${BASE_URL}/${id}`, userObj);
  window.location.href='index.html'

}
async function postUser() {
  console.log("salam");
  let userObj = {
    name: nameIn.value,
    surName: surName.value,
    email: email.value,
    date:new Date(),
    photo:`./images/${photo.value.split("\\")[2]}`
  };
  await axios.post(BASE_URL, userObj);
  window.location.href='index.html'

}
if (id) {
  console.log("id", id);
  button.innerHTML = "Edit";
  getUserById();
}
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (id) {
    editUser();
  } else {
    postUser();
  }
});
