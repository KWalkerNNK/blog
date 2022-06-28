const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Song = new Schema({
    name: { type: String, maxLength: 255 },
    url: { type: String, maxLength: 255 },
    img: { type: String, maxLength: 255 },
    author: { type: String, maxLength: 70 },
    slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('Song', Song);
