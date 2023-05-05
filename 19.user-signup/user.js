let addBtn=document.querySelector("#addBtn")
let boxes=document.querySelector(".boxes")


addBtn.addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/User-signup/index.html"
})

let usersObj = JSON.parse(localStorage.getItem("object")) || [];
function allUsers() {
    boxes.innerHTML = ''
    usersObj.forEach((user) => {
        const box = document.createElement('div')
        boxes.append(box)
        box.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 20px; color:'red';">User</h2>
        <div>
            <h5 id="userName">name:${user.userName} </h5>
            <h6 id="userEmail">email:${user.email} </h6>
            <button onclick='deleteUser(${user.id})' class='btn btn-danger'>Delete</button>
            <br>
        </div>
        `
        box.classList.add('box')
    })
}
allUsers()
function deleteUser(userId) {
    users = users.filter((user) => user.id !== userId)
    localStorage.setItem('users', JSON.stringify(users))
    allUsers()
    console.log('ss');
}


