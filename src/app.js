const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const route = require('./routes/index');
const db = require('./config/database/connect');

//Connect Database
db.connect();

const app = express();
const port = 3000;

//Hiển thị ảnh
app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger // Hiển thị console.log
app.use(morgan('combined'));

//Middleware for post method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Template engine
app.engine(
    'hbs',
    engine({
        //Mở rộng tên
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port localhost:${port}`);
});
