const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Song = new Schema({
    name: { type: String, maxLength: 255 },
    url: { type: String, maxLength: 255 },
    img: { type: String, maxLength: 255 },
    author: { type: String, maxLength: 70 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Song', Song);
