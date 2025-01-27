const mongoose = require('mongoose');
const Schema = mongoose.Schema;
Schema({
    id: Number,
    title: String,
    price: Number,
    image: String,
})
module.exports = mongoose.model('Books', Schema);
