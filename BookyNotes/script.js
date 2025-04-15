var popupoverlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popupbox")
var addbutton = document.querySelector(".addbutton")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup = document.getElementById("cancelpopup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addpopup = document.getElementById("addpopup")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var description=document.getElementById("description")

addpopup.addEventListener("click",function(event){
   event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","book-container")
   div.innerHTML=` <h2>${booktitle.value}</h2>
        <h4>${bookauthor.value}</h4>
        <p>${description.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
   container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
      event.target.parentElement.remove()
}
