require('dotenv').config()
const path = require('path')
const express = require('express')
const hbs = require('hbs')

//const port =3000;
const PORT = process.env.PORT || 5000;

const app = express()
//templates

const templates = path.join(__dirname, "../templates/views");
//partial

const partial = path.join(__dirname, "../templates/layout");

const staticPath = path.join(__dirname, '../public');

//serve css file
app.use(express.static(staticPath))

//serve file view engine
app.set("view engine", "hbs")
app.set('views', templates)

//registerPartials
hbs.registerPartials(partial)

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(PORT, ()=> {
  console.log(`Listening ${PORT}`)
})