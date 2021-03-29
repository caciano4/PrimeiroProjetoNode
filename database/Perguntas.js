const sequilize = require("sequelize");
const connection = require("./dataBase");

const Perguntas =  connection.define('Perguntas',{
    titulo:{
        type: sequilize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequilize.TEXT,
        allowNull: false
    }
})

Perguntas.sync({force: false}).then(() =>{});

module.exports = Perguntas;