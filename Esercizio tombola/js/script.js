
function creaTab (){
    let tab = document.querySelector("#tabellone")
    for(let i = 1; i <= 76; i++){
        let cella = document.createElement("div");
        cella.innerText = i
        cella.className = "celle"
        tab.appendChild(cella)
    }
}

creaTab()


let button = document.querySelector("button")
button.addEventListener("click", () =>{
    let celle = document.querySelectorAll("#tabellone div")
    let number = Math.ceil(Math.random() * 76)
    console.log(number)
    celle.forEach(cella  => {
      celle[number-1].style.backgroundColor = "black";
      celle[number-1].style.color = "white";
    })
})
