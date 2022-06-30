const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
//Xoá mềm
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
mongoose.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

const Song = new Schema(
    {
        name: { type: String, maxLength: 255 },
        url: { type: String, maxLength: 255 },
        img: { type: String, maxLength: 255 },
        author: { type: String, maxLength: 70 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Song', Song);
