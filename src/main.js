const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path');
const methodOverride = require('method-override');


const hbs = exphbs.create({extname: '.hbs'})

const helpers = require('handlebars-helpers')();

const route = require('./routes');
const db = require('./config/db');

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

//Connect Database
db.connect();

//Middleware to solve Body Form
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'));

//Template engines
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, 'resources/Views'));
console.log('PATH: ', path.join(__dirname, '.\\resources\\Views')); 

// Routes init
route(app);

app.listen(port, () => {
  console.log(`ATN SHOP is http://localhost:${port}`)
})
