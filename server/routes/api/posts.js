
require('../../src/db');
// this file specifies different routes
const express = require('express');
const mongoose = require('mongoose');
const movies = mongoose.model('Movies');

const router = express.Router();

// get movies
router.get('/', async (req, res) => {
    res.send(await movies.find({}));
})

// add a movie
router.post('/', async (req, res) => {
    await movies.insertMany({
        name:req.body.name,
        director:req.body.director,
        rating: req.body.rating
    });
    res.status(201).send();
})

// delete a movie
router.delete('/:name', async (req, res) => {
    await movies.deleteOne({
        name:req.params.name
    });
    res.status(200).send();
})

module.exports = router;