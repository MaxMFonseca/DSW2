const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const path = require('path');

app.engine('handlebars', handlebars({
    defaultLayout:'main'
}))

app.set('viewEngine', 'handlebars')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
    res.render('base.handlebars')
})

app.post('/', function(req, res){
    res.render('base.handlebars')
})

app.get('/loginPage', function(req, res){
    res.render('login_page.handlebars')
})

app.post('/list', function(req, res){
    res.render('hotel_list.handlebars')
})

app.post('/promo_register', function(req, res){
    res.render('promo_register.handlebars')
})

app.post('/admin_register', function(req, res){
    res.render('admin_register.handlebars')
})

app.listen(process.env.PORT || 3000, function(){
    console.log('running')
})