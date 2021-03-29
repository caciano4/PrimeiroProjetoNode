const Sequilize = require("sequelize");
const connection = new Sequilize('guia-pergunta','root','450891',{
    host:'localhost',
    dialect: 'mysql'
});

//você deve importar a biblioteca 
//sequilize depois instacia-lá 
//{primeiro o nome do banco de dados,
// Usuario , Senha, onde está rodando,
// e o tipo de dados no final exportar essa conexão}

module.exports = connection;