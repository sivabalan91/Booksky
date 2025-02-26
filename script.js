var popup=document.querySelector(".popup")
var popupbox=document.querySelector(".popup-box")
var btn=document.getElementById("btn")


btn.addEventListener("click",function(){

     popup.style.display="block"
     popupbox.style.display="block"

})

var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){

    event.preventDefault()
    popup.style.display="none"
    popupbox.style.display="none"

}
)

var container=document.querySelector(".container")
var title=document.getElementById("title")
var author=document.getElementById("author")
var short=document.getElementById("short")
var add=document.getElementById("add")

add.addEventListener("click",function(event){

    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${title.value}</h2>

    <h5>${author.value}</h5>

    <p>${short.value}</p>

    <button onclick="del(event)">Delete</button>
`
container.append(div)
popup.style.display="none"
popupbox.style.display="none"

title.value=""
author.value=""
short.value=""



})

function del(event){

    event.target.parentElement.remove()

}
