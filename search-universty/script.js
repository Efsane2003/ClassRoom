let tbody = document.querySelector("tbody");
let search = document.querySelector("#search");
let spinner = document.querySelector(".spinner");
function universtData(arr) {
  tbody.innerHTML = "";
  arr.forEach((element) => {
    tbody.innerHTML += `
        <tr>
        <td>${element.name}</td>
        <td>${element.country}</td>
        <td>${element.domains}</td>
        <td><a href="${element.web_pages}">${element.web_pages[0]}</a></td>
        </tr>
        
        `;
  });
}
axios("http://universities.hipolabs.com/search?country=azerbaijan&name=").then(
  (res) => {
    universtData(res.data);
  }
);

window.onload = function () {
  tbody.innerHTML = "";
  spinner.style.display = "flex";
  axios(
    `http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`
  ).then((res) => {
    spinner.style.display = "none";
    universtData(res.data);
  });
};

search.addEventListener("input", function (e) {
  tbody.innerHTML = "";
  spinner.style.display = "flex";
  axios(
    `http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`
  ).then((res) => {
    spinner.style.display = "none";
    universtData(res.data);
  });
});
