
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
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


let port = process.env.PORT || 5050;

app.listen((port), console.log(`Server started on port ${port}...`));
