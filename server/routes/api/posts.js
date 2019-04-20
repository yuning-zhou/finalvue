
// this file specifies different routes

const express = require('express');
//const mongoose = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hellooooo')
})



module.exports = router;