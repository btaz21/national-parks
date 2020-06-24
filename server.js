//~~~~~~~~Configuration~~~~~~~~~//

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const db = mongoose.connection
require('dotenv').config()
// const PROJECT3_DB  = process.env.PROJECT3_DB
// const PORT = process.env.PORT

//~~~~~~~~DB Config~~~~~~~~~~//

mongoose.connect('mongodb://localhost:27017/nationalparks',  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', 'mongodb://localhost:27017/nationalparks'));
db.on('disconnected', () => console.log('mongo disconnected'));

//~~~~~~~~~Middleware~~~~~~~~~//

app.use(express.json())
app.use(express.static('public'))
app.use(session({
  secret: process.env.SECRET,
  resave:false,
  saveUninitialized:false
}))


//~~~~~~~~~Controllers~~~~~~~~~//

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

const parksController = require('./controllers/parks.js')
app.use('/parks', parksController)

//~~~~~~~~~Listener~~~~~~~~~//

app.listen(3005, () => {
  console.log('listening...');
})
