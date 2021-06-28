// Esse arquivo não faz coisa alguma ...
// Todo o projeto esta client side
// Para rodar basta dar um npm start em client

const express = require('express')
const app = express()
const path = require('path');
/*MONGO??*/

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use(function (req, res, next) {
    let data = loginStatus
    res.status(404).render('fof.handlebars', data)
  });

app.listen(process.env.PORT || 3001, function(){
    console.log('running 3001 ... BUT -- Esse arquivo não faz coisa alguma ... -- Todo o projeto esta client side -- Para rodar basta dar um npm start em client')
})