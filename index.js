const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Android']

console.log(lista)

// Endpoint Read All [GET] /personagem
app.get('/personagem', function (req, res){
    res.send(lista)
})

app.listen(3000, function(){
    console.log('rodando na porta http://localhost:3000')
})