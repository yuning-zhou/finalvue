const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: String,
    text: {
        type: String,
        required: true
    }
})

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    rating: {
        type: Number, 
        min: 0, 
        max: 5,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    reviews: [ReviewSchema] 
});

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    director: {
        type: String,
        required: true
    },
    rating: {
        type: Number, 
        min: 0, 
        max: 5,
        required: true
    },
    reviews: [ReviewSchema] 
});

const PlaceSchema = new Schema({
    country: {
        type: String,
        required: true
    }, 
    city: {
        type: String,
        required: true
    },
    touristyAttractions: {
        type: String,
        required: true
    },
    reviews: [ReviewSchema] 
});

// models
mongoose.model('Books', BookSchema);
mongoose.model('Movies', MovieSchema);
mongoose.model('Places', PlaceSchema);
mongoose.model('Reviews', ReviewSchema);


// conditionally read username and password
// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/yz3547';
}

const client = mongoose.connect(dbconf, {useNewUrlParser: true});

module.exports = client;