
require('../../src/db');
// this file specifies different routes
const express = require('express');
const mongoose = require('mongoose');
const movies = mongoose.model('Movies');

const router = express.Router();

router.get('/', async (req, res) => {
    const movieLists = await loadMovies();
    res.send(console.log(movieLists));
    
})

function loadMovies(){
    return movies.find({});
}



module.exports = router;