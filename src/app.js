const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')

const app = express()
const port = 3000

const route = require('./routes/index')

//Hiển thị ảnh
app.use(express.static(path.join(__dirname,'public')))

//HTTP Logger // Hiển thị console.log
app.use(morgan('combined'))

//Middleware for post method
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Template engine
app.engine('hbs', engine({
  //Mở rộng tên
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources/views'))

//Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})