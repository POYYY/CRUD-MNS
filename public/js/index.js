import {list,deleteCrypto} from "./module/options.js"

// select balise avec id pour tout l'index
let containerListe = document.querySelector("#data-wrapper");

list((crypto)=>{
    crypto.forEach((crypto) => {
        createRow(crypto);
    });
})

function deleteElement(id){
    deleteCrypto(id,()=>{
        containerListe.innerHTML= "";
        list((crypto)=>{
            crypto.forEach((crypto) => {
                createRow(crypto);
            });
        })

    })
}
// crée une nouvelle crypto + nouvelle ligne dans l'index
function createRow(data) {
    if (!data) return;
    let tr = document.createElement('tr');
    tr.innerHTML =  `
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>
      <a href="/edit/${data.id}" class="btn btn-primary">Modifier</a>
      <button class="btn btn-danger crud-btn-delete">Supprimer</button>
    </td>
  `;

    // create button for delete with id
    tr.querySelector(".crud-btn-delete").addEventListener("click", (event) => {
        deleteElement(data.id);
    });


    // e
    tr.addEventListener("click",(event)=>{
        if (event.target.localName !== "td") return;
        window.location.href = `/cryptoVue/${data.id}`
    });
    containerListe.appendChild(tr);
}

