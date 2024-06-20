const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.listen(3000, function(){
    console.log('rodando na porta http://localhost:3000')
})