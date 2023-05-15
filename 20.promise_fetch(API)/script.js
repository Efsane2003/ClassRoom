// import { API } from "./API.js";

// 1

// function getSuppliersById(id) {
//   fetch(`${API}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getSuppliersById();

// function getAllSuppliers() {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }
//   getAllSuppliers();

//   function completed(){

//   }

// 2

// function getSuppliersById1() {
//   fetch(`${API}`)
//     .then((response) => response.json())
//     .then((data) => {
//       let a = data.filter((el) => el.completed == true);
//       console.log(a);
//     });
// }
// getSuppliersById1();
// import { API } from "./API.js";

let tBody = document.querySelector("tbody");
let deleBtn = document.querySelectorAll(".del");
let API = "https://northwind.vercel.app/api/orders";
function tableapi() {
  fetch(`${API}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        let trElement = document.createElement("tr");

        trElement.innerHTML += `
              <td>${element.id}</td>
              <td>${element.companyName}</td>
              <td>${element.address?.city}</td>
              <td>${element.address?.country}</td>
              <td>${element.address?.phone}</td>
              <td><button class="del" onclick=deleteCard("${element.id}")>DELETE</button></td>
              `;
        tBody.append(trElement);
      });
    });
}
tableapi();

function deleteCard(id){
  fetch(`${API}/${id}`,{
    method:"DELETE"
  }).then(()=>{
    tableapi()
  })
}
