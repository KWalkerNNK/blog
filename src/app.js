const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const route = require('./routes/index');
const db = require('./config/database/connect');
const SortMiddleware = require('./app/middleware/SortMiddleware');

//Ghi đè phương thức post sang put ....
const methodOverride = require('method-override');

//Connect Database
db.connect();

const app = express();
const port = 3000;

//sử dụng ghi đè phương thức
app.use(methodOverride('method'));

//Custom SortMiddleware
app.use(SortMiddleware);

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
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'bi-arrow-down-up',
                    asc: 'bi-sort-down-alt',
                    desc: 'bi-sort-down',
                };
                const types = {
                    default: 'asc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const type = types[sortType];
                const icon = icons[sortType];
                return `<a href="?_sort&column=${field}&type=${type}">
                <i class="bi ${icon}"></i>
            </a>`;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port localhost:${port}`);
});
