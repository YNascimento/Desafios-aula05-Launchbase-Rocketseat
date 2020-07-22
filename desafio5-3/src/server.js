const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()



server.use(express.static('public')) //puxa arquivos css e js para pags
server.use(express.urlencoded({ extended:true })) //habilita leitura de conteudo de req.body por post
server.use(methodOverride('_method')) // dependencia para substituir metodos post e get em forms
server.use(routes)

server.set("view engine","njk")

//views = pasta ou caminho, opntions = usar o express como server
nunjucks.configure("src/app/views",{
    express:server,
    autoescape:false, //permite que cod html dentro de texto seja interpretado
    noCache: true //não guarda versões dos dados então sempre puxa do servidor
})

//ativa servidor para ouvir
server.listen(5001,function(){
    console.log('server running porta5001')
})