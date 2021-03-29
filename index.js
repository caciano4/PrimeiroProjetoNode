//Bibliotecas importadas
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dataBase = require("./database/dataBase");
const connection = require("./database/dataBase");
const Perguntas = require("./database/Perguntas");

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita Com sucesso');
    })
    .catch((msgErro) =>{
        console.log('mensagem de erro')
    })


//BodyParser 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

//Motor de renderização
app.set("view engine","ejs");

//Configurar Paginas Staticas
app.use(express.static('public'))

//Rotas
app.get("/",(req,res) => {
    Perguntas.findAll({raw: true}).then(quest => {
        res.render("index",{quest: Perguntas})
    });
    
})

app.get("/pergunta",(req,res) => {
    res.render("perguntar")
})

app.post("/salvarPergunta",(req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    
    Perguntas.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    });
})

app.listen(3000,() => {
    console.log("App Rodando");
});
