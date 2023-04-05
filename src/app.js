const express = require('express')
const path = require('path')
const morgan = require('morgan');

const app = express();

// () =>
app.set('port', process.env.PORT || 7000)
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname + '/views')))
app.set('view engine', 'ejs');



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//routes
app.use(require('./routes/index.js'))
//static
app.use(express.static(path.join(__dirname,'public')));

module.exports = app