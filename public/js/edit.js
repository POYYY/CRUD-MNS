import {editCrypto,getCrypto} from "./module/options.js"

// mise à jour du formulaire
let name = document.querySelector("#name");
let description = document.querySelector("#description");
let form = document.querySelector("#form-edit");

let Url = window.location.href.split("/");
let id = Url[Url.length - 1];

// reprise des infos de la crypto
getCrypto(id,(crypto)=>{
    name.value = crypto.name;
    description.value = crypto.description;
    console.log(crypto);
});

// event du form par un send
form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendFormEdit();
});

// envoi des modifications
function sendFormEdit(){
    let validName = document.querySelector("#name");
    let validDescription = document.querySelector("#description");
    if (!validName || !validDescription) return;
    let crypto = {
        id: +id,
        name: name.value,
        description: description.value,

    }
    console.log(crypto);

    // return page d'accueil
    editCrypto(crypto,+id,()=>{
        window.location.href = "/";
    })
}