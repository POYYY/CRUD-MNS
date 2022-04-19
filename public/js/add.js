import {uploadCrypto} from "./module/options.js"
let form = document.querySelector("#form-add");

// event sur le add form
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // nouvelle vue selection id
    let nomValid = document.querySelector("#name");
    let desciptionValid = document.querySelector("#description");

    if (!nomValid || !desciptionValid) return;

    let req = {
        id: 0,
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
    };

    // return page d'accueil
    uploadCrypto(req,()=>{
        window.location.href = "/";
    });
});