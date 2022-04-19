// renvoyer élément
let resendOption = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
};
// récup élément
let getOption ={
    method: "GET",
    headers:new Headers(),
    mode: "cors",
    cache: "default",
};
// get list crypto
export function list(cb){
    fetch("/crypto", getOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res);
        });
}
// supp élément
let deleteOption ={
    method: "DELETE",
    headers:new Headers(),
    mode: "cors",
    cache: "default",
};
// get crypto
export function getCrypto(id, cb){
    fetch(`/crypto/${id}`, getOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res);
        });
}

// add crypto
export function uploadCrypto(crypto, cb){
    resendOption.method = "POST";
    resendOption.body = JSON.stringify(crypto);
    fetch("/crypto", resendOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res)
        });
}
// edit crypto
export function editCrypto(crypto, id, cb){
    resendOption.method = "PUT";
    resendOption.body = JSON.stringify(crypto);
    fetch(`/crypto/${id}`, resendOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res)
        });
}
// delete crypto
export function deleteCrypto(id, cb){
    fetch(`/crypto/${id}`,deleteOption)
        .then((res) => {
            if (res.ok) return res.json();
        })
        .then((res) => {
            cb(res)
        });
}