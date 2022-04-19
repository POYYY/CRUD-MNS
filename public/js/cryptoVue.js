import {getCrypto} from "./module/options.js"

let decomposeUrl = window.location.href.split("/");
let id = decomposeUrl[decomposeUrl.length - 1];

// select balise avec id
let title = document.querySelector("#title");
let description = document.querySelector("#description");


getCrypto(id,(crypto)=>{
    title.innerText = `Nom : ${crypto.name}.`;
    description.innerText = `Description : ${crypto.description}!`;
});

// button
document.querySelector("#button-back").addEventListener("click",()=>{
    window.location.href = "/";
})