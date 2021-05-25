const { model, Schema } = require('mongoose');

const blogSchema = new Schema({
    Title: String,
    Body: String
});

module.exports = model('Blog', blogSchema);