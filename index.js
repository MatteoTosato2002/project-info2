const express = require("express")
const app = new express()
const handlebars = require('express-handlebars')
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/'
    }))

app.get('/', (req, res) => {
    let sist = req.get("User-Agent").substr(13,20)
    let sistf = ""
    for (i = 0; i < 15; i++) {
        if (sist[i]=== ";"){
            i = 15
        } else {
            sistf += sist[i]
        }
      }
    fakeApi = () => sistf
    res.render('main', {layout: 'index', sistema: fakeApi()})
    const lang = req.get("User-Agent").substr(13,20)
    console.log(lang)
    })

app.get('/hello', (req, res) => {
    res.send("ciao il tuo nome è " + req.query.name + " e il tuo cognome è " + req.query.surname + " e hai " + req.query.age + " anni!")
    })
  

app.listen(8080, () => console.log("sono partito"))