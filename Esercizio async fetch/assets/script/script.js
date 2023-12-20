document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#loadImg").addEventListener("click", () => {
        fetch ("https://api.pexels.com/v1/search?query=[your-query]", {
        method: "GET",
        headers : {
            Authorization: "Us0vd4NYhklWQHVPTLUoVbb1UF098QN5E0qr7gw5gckUKggzjJVjxoOy"
        }
    })
        .then(response => response.json())
        .then(json => {
            json.photos.forEach(element => {
                document.querySelectorAll("div.card").forEach(i => {
                    i.remove();
                })

                document.querySelector("div.col-md-4").forEach(div =>{
                    div.innerHTML += `
                        <div class="card mb-4 shadow-sm">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Lorem Ipsum</h5>
                        <p class="card-text">
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                View
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                Hide
                            </button>
                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                    `
                })
                
        })})
        
    })
})
