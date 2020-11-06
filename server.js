//Dependencies
require('dotenv').config()
const express = require('express');
const methodOverride  = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const session = require('express-session')

//Port
const PORT = process.env.PORT;

//Database
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI ,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,});
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open' , ()=>{});

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(
  session({
    secret: process.env.SECRET, 
    resave: false,
    saveUninitialized: false
  })
)

// Routes
const seriesController = require('./controllers/seriesController')
app.use('/series', seriesController);

const userController = require('./controllers/userController.js')
app.use('/users', userController)

const sessionsController = require('./controllers/sessionsController.js')
app.use('/sessions', sessionsController)


//localhost:3000
app.get('/' , (req, res) => {
  res.render('welcome.ejs', {currentUser: req.session.currentUser, hideNav: true});
});

//Listener

app.listen(PORT, () => console.log( 'Hello, Seattle'));