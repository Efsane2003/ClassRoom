let myform = document.querySelector(".myform");
let exampleInputSurname = document.querySelector("#exampleInputSurname1");
let exampleInputEmail = document.querySelector("#exampleInputEmail1");
let exampleInputPassword = document.querySelector("#exampleInputPassword1");
let check = document.querySelector(".form-check-input");
let btn = document.querySelector("#submitBtn");

let arr = [];

exampleInputSurname.addEventListener("input", () => {
  checkAnyInput();
});
exampleInputEmail.addEventListener("input", () => {
  checkAnyInput();
});
exampleInputPassword.addEventListener("input", () => {
  checkAnyInput();
});
check.addEventListener("input", () => {
  checkAnyInput();
});

function checkAnyInput() {
  if (
    exampleInputSurname.value &&
    exampleInputEmail.value &&
    exampleInputPassword.value &&
    check.checked
  ) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", "");
  }
}

myform.addEventListener("submit", function (e) {
  e.preventDefault();

  let users = {
    id: Date.now(),
    userName: exampleInputSurname.value,
    email: exampleInputEmail.value,
    password: exampleInputPassword.value,
    checkbox: check.checked,
  };
  if (users.userName && users.email && users.password && users.checkbox) {
    btn.removeAttribute("disabled");
    arr.push(users);
    localStorage.setItem("object", JSON.stringify(arr));
  } else {
    btn.setAttribute("disabled", " ");
  }
  window.location.href = "http://127.0.0.1:5500/user-signup/user.html";
});
