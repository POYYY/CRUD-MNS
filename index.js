// init express et bdd
let express = require("express");
let app = express();
app.use(require("express").json());
const data = require("./src/bdd.js") ;
// varible du port sur le 3000
const PORT = 3000;

// mise en place de toutes les routes
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/index.html`);
});
app.get("/add", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/add.html`);
});
app.get("/edit/:name", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/edit.html`);
});
app.get("/delete", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/delete.html`);
});
app.get("/cryptoView/:id", (req, res) => {
    res.sendFile(`${__dirname}/public/pages/cryptoVue.html`);
});

// mise à jour d'une crypto
app.put("/crypto/:id", (req, res) => {
    let id = req.params.id;
    data.forEach((element, index) => {
        if (element.id == id) {
            data[index] = req.body;
            res.send(data[index]);
        }
    });
});

// delete une crypto
app.delete("/crypto/:id", (req, res) => {
    const indexElem = data.findIndex((elem) => elem.id == req.params.id);
    if (indexElem === -1) return res.status(404).send("élément inexistant");
    data.splice(indexElem, 1);
    res.send(data);
});

// vue du réseau de la blockchain
app.get("/crypto", (req, res) => {
    res.send(data);
});
// détail d'une crypto-monnaie
app.get("/crypto/:id", (req, res) => {
    let id = req.params.id;
    data.forEach((element) => {
        if (element.id == id) res.send(element);
    });
});
// ajout d'une crypto-monnaie
app.post("/crypto", (req, res) => {
    let localData = req.body;
    localData.id = data.length + 1;
    data.push(localData);
    res.send(data);
});


app.use("/public", express.static("./public"));
// démarrage du serveur
app.listen(3000, () => {
    console.log(`Le serveur est ouvert sur le port ${PORT}`);
});
