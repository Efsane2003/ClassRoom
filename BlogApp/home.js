let box=document.querySelector(".box")
let search=document.querySelector("#search")

function drawCard(arr){
    box.innerHTML=""
    arr.forEach((el)=>{
        // console.log(el)
        box.innerHTML+=`
        <div class="div">
        <div class="card">
        <h2 class="title">${el.title}</h2>
        <h3 class="body">${el.body.slice(0,200)}...<a class="read-more" href="details.html?id=${el.id}">Read More</a></h3>
        <p class="author">written by ${el.author}/p>
        <button id="id${el.id}" onclick=deleteBlog("${el.id}",this) class="deleteBtn">Delete</button>
        <a class="edit" href="newblog.html?id=${el.id}">Edit</a>
        </div>
        </div>`
    })

}


window.addEventListener("load",function(){
    fetch("http://localhost:8080/blogs")
    .then((res)=>res.json())
    .then((data)=>{
        drawCard(data)
    })
})
// delete
function deleteBlog(id,btn){
    fetch(`http://localhost:8080/blogs/${id}`,{
        method:"DELETE"
    })
    btn.parentElement.remove()

}




// search
search.addEventListener("input",function(e){
    fetch("http://localhost:8080/blogs")
    .then((res)=>res.json())
    .then((data)=>{
        let filtredBlogs=data.filter((item)=>item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
       )
       drawCard(filtredBlogs)
    })
})