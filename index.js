const express = require('express')
const app = express()
const path = require('path');
/*MONGO??*/

let loginStatus = {
    logged: false,
    usertype: "none"
}

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const promos = [
        {
            hotel : "hotel A",
            site : "site A",
            in : "A/A/A",
            out : "A/A/A",
            price : "76.50"
        },
        {
            hotel : "hotel B",
            site : "site A",
            in : "A/A/A",
            out : "A/A/A",
            price : "56.50"
        },
        {
            hotel : "hotel B",
            site : "site B",
            in : "A/A/A",
            out : "A/A/A",
            price : "46.50"
        },
        {
            hotel : "hotel B",
            site : "site A",
            in : "A/A/A",
            out : "A/A/A",
            price : "36.50"
        },
        {
            hotel : "hotel C",
            site : "site A",
            in : "A/A/A",
            out : "A/A/A",
            price : "26.50"
        },
        {
            hotel : "hotel C",
            site : "site C",
            in : "A/A/A",
            out : "A/A/A",
            price : "16.50"
        },
]

app.get('/', function(req, res){
    let data = loginStatus
    res.render('./client/src/index.js', data)
})

app.post('/', function(req, res){
    if(req.body.username){
        if(req.body.username === "none"){
            loginStatus.usertype = "none"
            loginStatus.logged = false
        }else if(req.body.username === "buyer"){
            loginStatus.usertype = "buyer"
            loginStatus.logged = true
        }else if(req.body.username === "hotel"){
            loginStatus.usertype = "hotel"
            loginStatus.logged = true
        }else if(req.body.username === "site"){
            loginStatus.usertype = "site"
            loginStatus.logged = true
        }else if(req.body.username === "admin"){
            loginStatus.usertype = "admin"
            loginStatus.logged = true
        }
    }

    let data = loginStatus
    res.render('base.handlebars', data)
})

app.get('/home', function(req, res){
    let data = loginStatus
    res.render('base.handlebars', data)
})

app.post('/list', function(req, res){
    let data = loginStatus
    data.promos = promos
    res.render('promo_list.handlebars', data)
})

app.post('/promo_register', function(req, res){
    let data = loginStatus
    res.render('promo_register.handlebars', data)
})

app.post('/admin_register', function(req, res){
    let data = loginStatus
    res.render('admin_register.handlebars', data)
})

app.use(function (req, res, next) {
    let data = loginStatus
    res.status(404).render('fof.handlebars', data)
  });

app.listen(process.env.PORT || 3001, function(){
    console.log('running 3001')
})