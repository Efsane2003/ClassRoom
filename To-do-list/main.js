let input = document.querySelector("#todo-input");
let btn = document.querySelector(".btn-primary");
let ulElement = document.querySelector(".list-group");
let removeBtn = document.querySelector(".btn-danger");

let arr = JSON.parse(localStorage.getItem("object")) || [];

// btn.addEventListener("click", function () {
//   ulElement.innerHTML = "";
//   let obj = {
//     id: Date.now(),
//     todoText: input.value,
//   };
//   arr.push(obj);
//   console.log(arr);
//   localStorage.setItem("object", JSON.stringify(arr));
//   arr.forEach((element) => {
//     ulElement.innerHTML += `
//     <li class="list-group-item list-group-item-warning d-flex justify-content-between align-items-center my-3">
//                 <span>${element.todoText}</span>
//                 <div class="btn">
//                     <button type="button" class="btn btn-primary">Edit</button>
//                     <button type="button" class="btn btn-danger">Deete</button>
//                    </div>
//                 </li>

//     `;
//   });
// });

function lisFavbooks() {
  ulElement.innerHTML = "";

  arr.forEach((element) => {
    ulElement.innerHTML += `
    <li class="list-group-item list-group-item-warning d-flex justify-content-between align-items-center my-3">
                <span>${element.todoText}</span>
                <div class="btn">
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger" onclick=removeBook(${element.id})>Delete</button>
                   </div>
                </li>
    `;
  });
}
// lisFavbooks()
btn.addEventListener("click", () => {
  let obj = {
    id: Date.now(),
    todoText: input.value,
  };
  arr.push(obj);
  console.log(arr);
  localStorage.setItem("object", JSON.stringify(arr));
  lisFavbooks()
});

function removeBook(id) {
  arr = arr.filter((obj) => obj.id != id);
  localStorage.setItem("object", JSON.stringify(arr));
  lisFavbooks();

}
