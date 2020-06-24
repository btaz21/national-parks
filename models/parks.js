const mongoose = require ('mongoose');

const parksSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String,
    weather:String,
    directions:String,
    cost:String,
    priority:String,
    visited: {type: Boolean, default: false},
    note: String
});

const Parks = mongoose.model('Park', parksSchema);

module.exports = Parks;
