const mongoose = require('mongoose');
const Schema = mongoose.Schema;
Schema({
    id: Number,
    title: String,
    price: Number,
    image: String,
})
const bookMod = mongoose.model('Books', Schema);
