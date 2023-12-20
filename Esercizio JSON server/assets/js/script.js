const url = " http://localhost:3000/register/"
const urlLogin = " http://localhost:3000/login/"

// REGISTRAZIONE

if(window.location.href.includes("register")){
    register()
} else if(window.location.href.includes("login")){
    login()
}




function register(){
    document.querySelector("#registerBtn").addEventListener("click", () => {
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: document.querySelector("#exampleInputEmail1").value,
                password: document.querySelector("#exampleInputPassword1").value
            })
        }).then((response) => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
    })
}

//LOGIN


function login(){
    document.querySelector("#loginBtn").addEventListener("click", () => {
        fetch(urlLogin, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: document.querySelector("#exampleInputEmail1").value,
                password: document.querySelector("#exampleInputPassword1").value
            })
        }).then((response) => response.json())
        .then(json => {console.log(json)
            if (json.accessToken) {
                alert('Login effettuato')
            } else {
                alert('Credenziali errate')
            }
        })
        .catch(err => console.log(err))
    })
}