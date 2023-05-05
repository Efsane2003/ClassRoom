let myForm = document.querySelector("#myForm");
let exampleInputUserName = document.querySelector("#exampleInputUserName");
let exampleInputEmail1 = document.querySelector("#exampleInputEmail1");
let exampleInputPassword1 = document.querySelector("#exampleInputPassword1");
let checkboox = document.querySelector("#exampleCheck1");
let submitBtn = document.querySelector("#btn");

let usersObj = JSON.parse(localStorage.getItem("object")) || [];

exampleInputUserName.addEventListener("input", () => {
  checkAnyInput();
});
exampleInputEmail1.addEventListener("input", () => {
  checkAnyInput();
});
exampleInputPassword1.addEventListener("input", () => {
  checkAnyInput();
});
checkboox.addEventListener("input", () => {
  checkAnyInput();
});

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  user = {
    id: Date.now(),
    userName: exampleInputUserName.value,
    email: exampleInputEmail1.value,
    password: exampleInputPassword1,
    checked: checkboox.checked,
  };
  if (user.userName && user.email) {
    usersObj.push(user);
    localStorage.setItem("object", JSON.stringify(usersObj));
  }
  window.location.href="http://127.0.0.1:5500/User-signup/user.html"
});

function checkAnyInput() {
  if (
    exampleInputUserName.value &&
    exampleInputEmail1.value &&
    exampleInputPassword1 &&
    checkboox.checked
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
}
