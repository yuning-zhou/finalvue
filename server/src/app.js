
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // allows cross-port communications
const morgan = require('morgan');
const path = require('path');
require('./db');
//const mongoose = require('mongoose');

// middleware
const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({
        message:'hello world!'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message:`Welcome ${req.body.email}!`
    })
})

const post = require(path.join(__dirname, '../routes', 'api', 'posts'));

app.use('/movies/add', post);


let port = process.env.PORT || 5050;

app.listen((port), console.log(`Server started on port ${port}...`));
