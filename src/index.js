const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')

const app = express()
const port = 3000

//Hiển thị ảnh
app.use(express.static(path.join(__dirname,'public')))

//HTTP Logger // Hiển thị console.log
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  //Mở rộng tên
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources/views'))

app.get('/trangchu', (req, res) => {
  res.render('home')
})

app.get('/tintuc', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})