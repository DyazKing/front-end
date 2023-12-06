let btnAdd = document.querySelector("#add");
let btnRm = document.querySelector("#remove")

btnAdd.addEventListener("click", () =>{
    let i = document.querySelector("#nameForm form")
    let p = document.querySelector("#name p")
    let nameInput = i[0].value;

    localStorage.setItem("name", nameInput);
    let name = localStorage.getItem("name");
    p.innerText = name;
    i[0].value = " "
})

btnRm.addEventListener("click", () =>{
    let p = document.querySelector("#name p")
    localStorage.clear()
    p.innerText = ""
})

let p = document.querySelector("#name p")
p.innerText = localStorage.getItem("name")

/* function timerCount(){
    let timer = document.querySelector("#timer h3 span")
    let count = 0;
    console.log(count)

} */
let timer = document.querySelector("#timer span")
let count = sessionStorage.getItem("count");
setInterval(function(){
    sessionStorage.setItem("count", count)
    timer.innerHTML = count
    count++
    console.log(count)
},1000);



