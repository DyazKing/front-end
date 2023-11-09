let addTask = document.querySelector("#task")
addTask.addEventListener("click" , () => {
    let ul = document.querySelector("ul")
    let li = document.createElement("li")
    let input = document.querySelector("#input")
    let text = document.createTextNode(input.value)
    li.appendChild(text)
    if(text.length < 1){
        alert("Scrivi qualcosa")
    } else{
        ul.appendChild(li)
        let deleteBut = document.createElement("button")
        deleteBut.innerText = "Elimina"
        deleteBut.classList.add("deleteButton")
        li.appendChild(deleteBut)
        deleteBut.addEventListener("click", () =>{
            li.remove()
        })
        li.addEventListener("click", () => {
            li.style.color = "red"
            li.style.textDecoration = "line-through"
        })
    }
})